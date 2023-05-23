/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:50
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-05-23 18:23:35
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base:'/Honkai-Star-Rail-Docs/', // 设置为github仓库地址，用来部署到github pages
    themeConfig:{
        sidebar: [
            {
                title:'plugins',
                collapsable: false, //是否折叠
                children:[
                    {
                        title:'去掉全部console测试',
                        path:'/guide/1.md',
                    }
                ],
            },
            {
                title:'loaders',
                collapsable: false, //是否展开
                children:[
                    {
                        title:'生成打包信息',
                        path:'/guide/2.md',
                    }
                ],
            },
        ]
    }
}
