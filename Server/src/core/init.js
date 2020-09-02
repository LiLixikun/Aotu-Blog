/*
 * @Author: 席坤 
 * @Date: 2020-08-31 11:34:08 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-09-01 09:55:37
 */
import { createContainer, Lifetime } from 'awilix'
import { scopePerRequest, loadControllers } from 'awilix-koa'

export default function initContainer(app) {
    console.log("初始化 init  🐻");
    // 创建容器
    const container = createContainer()
    console.log(process.cwd());
    // 自动注册 services
    container.loadModules([`${process.cwd()}/dist/services/*.js`], {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SCOPED
        }
    })
    // 注入
    app.use(scopePerRequest(container))
    // 加载路由
    app.use(loadControllers(`${process.cwd()}/dist/controllers/*.js`))
}