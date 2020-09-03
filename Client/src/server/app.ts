import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'

import renderHtml from './render'

const app = new Koa()
const router = new Router()

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve("public"));

router.get("/", async (ctx) => {

    // 渲染 html 页面
    renderHtml(ctx)
})



app.listen(8085, () => {
    console.log("SSR 服务端允许在 8085上");
});
