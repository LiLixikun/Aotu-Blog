/*
 * @Author: 席坤 
 * @Date: 2020-08-31 11:34:08 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-08-31 13:46:23
 */
import { createContainer, Lifetime } from 'awilix'
import { scopePerRequest, loadControllers } from 'awilix-koa'

export default function initContainer(app) {
    // 创建容器
    const container = createContainer()
    // 自动注册 services
    container.loadModules([`${process.cwd()}/src/services/*.js`], {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SCOPED
        }
    })
    // 注入
    app.use(scopePerRequest(container))
    // 加载路由
    app.use(loadControllers(`${process.cwd()}/src/controllers/*.js`))
}