import routes from '../src/Routers'
import { IRouter } from '../types/index'

/**
 * 返回平铺的路由数组
 */
export default function getFlatRouter(): Array<string> {
    const flatRouter: Array<string> = [];

    function getRouterPath(router: Array<IRouter> | IRouter) {
        if (Array.isArray(router)) {
            router.forEach((item: IRouter) => {
                flatRouter.push(item.path)
                if (item.children) {
                    getRouterPath(item.children)
                }
            })
        } else {
            flatRouter.push(router.path)
        }
    }

    getRouterPath(routes)

    return flatRouter
}