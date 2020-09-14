import { route, GET, POST, PUT } from 'awilix-koa'
import { Success } from '../core/httpException'

@route('/api/tag')
class TagController {
    constructor({ tagService }) {
        this.tagService = tagService
    }

    @route('/list')
    @POST()
    async actionIndex(ctx) {
        // 此处需要判断，暂不处理(业务逻辑处理完成后所有的前端传递的参数都需要做验证处理)
        const postData = ctx.request.body
        const data = await this.tagService.getData(postData)
        // console.log(data)
        throw new Success(data, '加载成功')
    }

    @route('/create')
    @POST()
    async actionCreate(ctx) {
        // console.log(ctx.req)
        await this.tagService.create()
        throw new Success('创建成功', '加载成功')
    }

    @route('/update')
    @PUT()
    async actionUpdate(ctx) {
        throw new Success('更新成功')   
    }
}

export default TagController