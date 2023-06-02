/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-06-03 01:07:30
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default {
    title: '崩坏：星穹铁道小助手文档',
    description: '崩坏：星穹铁道小助手文档',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    plugins: [
        docsearchPlugin({
            apiKey: "284273618b0777c30fdbae3c1c0907a5",
            indexName: "sra-stysqy",
            appId: "PZLYTVJQGX",
        }),
    ],
    theme: defaultTheme({
        navbar: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide" },
            { text: "常见问题", link: "/guide/qa.html" },
            { text: "配置", link: "/config/" },
            {
                text: "反馈",
                children: [
                    { text: "QQ群", link: "https://qm.qq.com/cgi-bin/qm/qr?k=xdCO46fHlVcY7D2L7elXzqcxL3nyTGnW&jump_from=webapi&authKey=uWZooQ2szv+nG/re7luCKn8LW1KibSb0vvi0FycA45Mglm5AGM1GP2iJ+SiWmDwg" },
                    { text: "Telegram Group", link: "https://t.me/+yeQEhnuT9O41NDM1" }
                ]
            },
            { text: "Github", link: "https://github.com/Starry-Wind/StarRailAssistant" },
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
                ]
            },
            {
                text: "配置",
                link: "/config/"
            }
        ]
    })
}
