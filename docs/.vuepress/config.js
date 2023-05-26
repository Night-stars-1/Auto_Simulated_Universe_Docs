/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:50
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-05-26 13:48:42
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
            apiKey: "c1b57ecf806bfe5c370d3de23b858065",
            appId: "M6984MENBN",
            indexName: "just_laws",
            searchParameters: {
              attributesToSnippet: ["lvl1:30", "content:25"],
            },
            locales: {
              "/": {
                placeholder: "搜索文档",
                translations: {
                  button: {
                    buttonText: "搜索文档",
                    buttonAriaLabel: "搜索文档",
                  },
                  modal: {
                    searchBox: {
                      resetButtonTitle: "清除查询条件",
                      resetButtonAriaLabel: "清除查询条件",
                      cancelButtonText: "取消",
                      cancelButtonAriaLabel: "取消",
                    },
                    startScreen: {
                      recentSearchesTitle: "搜索历史",
                      noRecentSearchesText: "没有搜索历史",
                      saveRecentSearchButtonTitle: "保存至搜索历史",
                      removeRecentSearchButtonTitle: "从搜索历史中移除",
                      favoriteSearchesTitle: "收藏",
                      removeFavoriteSearchButtonTitle: "从收藏中移除",
                    },
                    errorScreen: {
                      titleText: "无法获取结果",
                      helpText: "你可能需要检查你的网络连接",
                    },
                    footer: {
                      selectText: "选择",
                      navigateText: "切换",
                      closeText: "关闭",
                      searchByText: "搜索提供者",
                    },
                    noResultsScreen: {
                      noResultsText: "无法找到相关结果",
                      suggestedQueryText: "你可以尝试查询",
                      reportMissingResultsText: "你认为该查询应该有结果？",
                      reportMissingResultsLinkText: "点击反馈",
                    },
                  },
                },
              },
            },
        }),
    ],
    theme: defaultTheme({
        navbar: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide" },
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
