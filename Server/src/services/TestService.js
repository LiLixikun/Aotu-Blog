import Test from '../model/test'
import { Op } from 'sequelize'

class TagService {

    async getData() {
        const data = await Test.findAll()
        // 使用嵌套数组来重命名属性：
        // findAll({
        //     attributes: ['foo', ['bar', 'baz'], 'qux']
        // });

        // 排除某些属性：
        // attributes: { exclude: ['baz'] }

        // 添加 where 字句
        // findAll({
        //     where: {
        //         authorId: 2
        //     }
        // });

        // Or 操作符
        // where: {
        //     [Op.or]: [
        //         { authorId: 12 },
        //         { authorId: 13 }
        //     ]
        // }


        Test.findAll({})
        return data
    }

    // 分页
    // offset 页码   limit 每页个数
    // count 符合查询条件的记录总数
    // 一个数组对象
    async findAndCountAll() {
        const { count, rows } = await Test.findAndCountAll({
            where: {
                title: {
                    [Op.like]: 'foo%'
                }
            },
            offset: 5,
            limit: 5
        })
    }

    // 查询单个
    async findOne(id) {
        await Test.findOne({
            where: {
                id
            }
        })
    }

    // 根据主键查找
    async findByPk(id) {
        await Test.findByPk(id)
    }

    // 创建单个
    async createData(data) {
        await Test.create(data)
    }

    // 批量创建
    // [{name:xx,age:20},{name:张三,age:12}]
    async bulkCreate(datas) {
        await Test.bulkCreate(datas)
    }

    async updateData(data) {
        await Test.update(data, {
            where: {
                id: data.id
            }
        })
    }


    async delData(id) {
        await Test.destroy({
            where: {
                id
            }
        })
    }

    // 销毁所有内容
    async destroyData() {
        await Test.destroy({
            truncate: true
        })
    }

    // 获取 元素id大于25 的个数
    async getCount(id) {
        await Test.count({
            where: {
                id: {
                    [Op.gt]: 25
                }
            }
        })
    }

}
export default TagService

// 更多查看
// https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/model-querying-basics.md