const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '基础数据',
        key: '/base',
        children: [
            {
                title: '标签管理',
                key: '/base/tag',
            },
            {
                title: '类别管理',
                key: '/base/category',
            },
            {
                title: '博客管理',
                key: '/base/blob',
            }
          
        ]
    }
];
export default menuList;