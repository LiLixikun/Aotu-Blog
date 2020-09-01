import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '../core/db'

class Tag extends Model {
    // 里面可以写一些默认的静态方法
    static getName() {
        return this.name
    }
}

Tag.init(
    {
        name: {
            type: DataTypes.STRING,
            // 默认值
            defaultValue: '林老哥',
            // 是否允许为空
            allowNull: false
        },
        id: {
            // 对于 UUID,使用 DataTypes.UUID
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4 // 或 Sequelize.UUIDV1
        },
        // 默认当前时间
        myDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        // unique 属性是创建唯一约束的简写.
        someUnique: {
            type: DataTypes.STRING,
            unique: true
        },
        incrementMe: {
            type: DataTypes.INTEGER,
            // 唯一主建
            primaryKey: true,
            // 自增属性
            autoIncrement: true,
            // 自定义列名称
            field: 'my_incrementMe',
            // 创建外健
            references: {
                // 对另一饿模型的参考
                model: 'text',
                // 引用模型的列名
                key: 'id',
            }
        },

        password: {
            type: DataTypes.STRING,
            set(val) {
                // 加密
                this.setDataValue('password', val + 123)
            },
            //自定义校验
            validate: {
                min: 1,
                max: 100,
                len: [4, 6]
            }
        },

        // 注释信息
        commentMe: {
            type: DataTypes.INTEGER,
            comment: '这是带有注释的列'
        }
    },
    {
        sequelize,
        tableName: 't_tag',
        freezeTableName: true,
        // 开启时间戳
        timestamps: true,
        // 不想要 createdAt
        createdAt: false,
        // 想要 updatedAt 但是希望名称叫做 updateTimestamp
        updatedAt: 'updateTime',
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        // 自动设置字段为蛇型命名规则
        underscored: true
    }
)


export default Tag

// 详情可查看
// https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/model-basics.md