/*
 * @Author: 席坤 
 * @Date: 2020-08-31 10:25:29 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-08-31 13:04:19
 */
import Koa from 'koa'

import { Success } from './core/httpException'
import useMiddlewares from './middlewares'
import initContainer from './core/init'
const app = new Koa()

useMiddlewares(app)

initContainer(app)

app.use(ctx => {
    throw new Success('Hello Koa', "fff")
});

app.listen("8088", () => {
    console.log("启动在8088 🍺")
})