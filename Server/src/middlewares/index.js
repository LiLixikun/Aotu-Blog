import bodyParse from 'koa-bodyparser';
import serve from 'koa-static';
import path from "path"
import catchError from './exception'

export default function useMiddlewares(app) {
    // 错误中间件在最前面
    app.use(catchError)

    // 加载服务器静态资源
    app.use(serve(path.join(__dirname, './static')))

    app.use(bodyParse())
}