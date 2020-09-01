/*
 * @Author: 席坤 
 * @Date: 2020-08-31 10:25:29 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-09-01 18:27:40
 */
import Koa from 'koa'

import useMiddlewares from './middlewares'
import initContainer from './core/init'

const app = new Koa()

useMiddlewares(app)

initContainer(app)

app.listen("8088", () => {
    console.log("启动在8088 🍺")
})