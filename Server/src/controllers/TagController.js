import { route, GET, POST } from 'awilix-koa'
import { Success } from '../core/httpException'

@route('/api/tag')
class TagController {
    constructor({ }) {
        this.tagService = tagService
    }

    @route('/list')
    @GET()
    async actionIndex(ctx) {
        throw new Success('hello word', '加载成功')
    }

    @route('/create')
    @POST()
    async actionCreate(ctx) {
        throw new Success('创建成功', '加载成功')
    }
}

export default TagController