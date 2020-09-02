import { route, GET, POST } from 'awilix-koa'
import { Success } from '../core/httpException'

@route('/api/tag')
class TagController {
    constructor({ tagService }) {
        this.tagService = tagService
    }

    @route('/list')
    @GET()
    async actionIndex(ctx) {
        const data = await this.tagService.getData()
        throw new Success(data, '加载成功')
    }

    @route('/create')
    @POST()
    async actionCreate(ctx) {
        throw new Success('创建成功', '加载成功')
    }
}

export default TagController