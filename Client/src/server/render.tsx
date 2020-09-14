import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { renderToNodeStream } from "react-dom/server";
import { ChunkExtractor } from '@loadable/server';
import path from 'path'
import { ParameterizedContext } from 'koa'

import App from '../shared/App'
import { getServerStore } from '../shared/store'

export default function renderHtml(ctx: ParameterizedContext) {
    // 防止koa自动处理response, 我们要直接把react stream pipe到ctx.res
    ctx.respond = false;

    const store = getServerStore()
    const defaultState = store.getState()

    const extractor = new ChunkExtractor({ statsFile: path.resolve('./public/stats.json') });
    const jsx = extractor.collectChunks(
        <Provider store={store}>
            <StaticRouter location={ctx.request.url} >
                <App />
            </StaticRouter>
        </Provider>
    );

    const htmlStream = renderToNodeStream(jsx);

    // You can now collect your script tags
    const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
    // You can also collect your "preload/prefetch" links
    const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
    // And you can even collect your style tags (if you use "mini-css-extract-plugin")
    const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();    const renderedStyleTags = extractor.getStyleTags();

    const before = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${styleTags}
        <title>React SSR</title>
    </head>
    
    <body>
    <div id="root">       
    `;
    //先往res里html 头部信息，包括div容器的一半          
    ctx.res.write(before);
    ctx.status = 200
    ctx.type = "html"
    //把react放回的stream pipe进res, 并且传入`end:false`关闭流的自动关闭
    htmlStream.pipe(
        ctx.res,
        { end: false }
    );
    //监听react stream的结束，然后把后面剩下的html写进html document
    htmlStream.on('end', () => {
        const after = `</div>
        <script type="text/javascript">window.REDUX_STORE=${JSON.stringify(defaultState)}</script>
        ${scriptTags}
        </body>
        </html>`
        ctx.res.write(after);
        //全部写完后，结束掉http response
        ctx.res.end();
    });
}
