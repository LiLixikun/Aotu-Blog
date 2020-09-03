import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { ParameterizedContext } from 'koa'

import App from '../shared/App'
import { getServerStore } from '../shared/store'

export default function renderHtml(ctx: ParameterizedContext) {

    const store = getServerStore()

    const defaultState = store.getState()

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={ctx.request.url} >
                <App />
            </StaticRouter>
        </Provider>
    );

    ctx.body = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>React SSR</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>windiw.REDUX_STORE=${JSON.stringify(defaultState)}</script>
                <script src="bundles.js"></script>
            </body>
        </html>
    `;
}
