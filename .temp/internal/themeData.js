export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"常见问题\",\"link\":\"/guide/qa.html\"},{\"text\":\"后台运行\",\"link\":\"/guide/bs.html\"},{\"text\":\"反馈\",\"children\":[{\"text\":\"QQ群\",\"link\":\"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1tC0SvvsvymbSDTH1J3xDlkDuKjW4X6K&authKey=yNAj26TRfqTRvRrBS9jHVTeGb2yYTncTKn%2BLGg%2FQjyvdlCupvAxdr82mwIt8Jw16&noverify=0&group_code=831830526点击链接加入群聊【模拟宇宙全手动！】：http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1tC0SvvsvymbSDTH1J3xDlkDuKjW4X6K&authKey=yNAj26TRfqTRvRrBS9jHVTeGb2yYTncTKn%2BLGg%2FQjyvdlCupvAxdr82mwIt8Jw16&noverify=0&group_code=831830526\"}]},{\"text\":\"Github\",\"link\":\"https://github.com/CHNZYX/Auto_Simulated_Universe\"}],\"sidebar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"children\":[{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"常见问题\",\"link\":\"/guide/qa.html\"},{\"text\":\"后台运行\",\"link\":\"/guide/bs.html\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
