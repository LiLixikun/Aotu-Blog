import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import { Readable } from "stream"
import { getFlatRouter } from '../shared/utils'
import renderHtml from './render'

const app = new Koa()
const router = new Router()

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve("public"));

const routes = getFlatRouter()

router.get(routes, async (ctx) => {

    // 渲染 html 页面
    renderHtml(ctx)
    // const html = renderHtml(ctx)

    // function createSSRStream() {
    //     return new Promise((resolve, reject) => {
    //         const htmlStream = new Readable();
    //         htmlStream.push(html)
    //         htmlStream.push(null)
    //         ctx.status = 200
    //         ctx.type = "html"
    //         htmlStream.on('error', err => reject).pipe(ctx.res)
    //     })
    // }
    // await createSSRStream()
})

app.on('error', (err) => {
    console.log(err);
})

app.listen(8085, () => {
    console.log("SSR 服务端运行在 8085上");
});
