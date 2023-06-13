/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 22:27:40
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-06-11 15:52:54
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
import { defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url)

export default {
    title: 'Auto_Simulated_Universe文档',
    description: 'Auto_Simulated_Universe文档',
    head: [['link', { rel: 'icon', href: 'icon_m.png' }]],
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
        /**
        docsearchPlugin({
            apiKey: "284273618b0777c30fdbae3c1c0907a5",
            indexName: "sra-stysqy",
            appId: "PZLYTVJQGX",
        }),
        **/
    ],
    theme: defaultTheme({
        docsRepo: 'https://github.com/Night-stars-1/Auto_Simulated_Universe_Docs',
        docsBranch: 'docs',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        navbar: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "常见问题", link: "/guide/qa.html" },
            { text: "后台运行", link: "/guide/bs.html" },
            {
                text: "反馈",
                children: [
                    { text: "QQ群", link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1tC0SvvsvymbSDTH1J3xDlkDuKjW4X6K&authKey=yNAj26TRfqTRvRrBS9jHVTeGb2yYTncTKn%2BLGg%2FQjyvdlCupvAxdr82mwIt8Jw16&noverify=0&group_code=831830526点击链接加入群聊【模拟宇宙全手动！】：http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1tC0SvvsvymbSDTH1J3xDlkDuKjW4X6K&authKey=yNAj26TRfqTRvRrBS9jHVTeGb2yYTncTKn%2BLGg%2FQjyvdlCupvAxdr82mwIt8Jw16&noverify=0&group_code=831830526" },
                ]
            },
            { text: "Github", link: "https://github.com/CHNZYX/Auto_Simulated_Universe" },
        ],
        sidebar: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "指南",
                children: [
                    { text: "指南", link: "/guide/" },
                    { text: "常见问题", link: "/guide/qa.html" },
                    { text: "后台运行", link: "/guide/bs.html" },
                ]
            }
        ]
    })
}
