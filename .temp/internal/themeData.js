export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/guide\"},{\"text\":\"配置\",\"link\":\"/config/\"},{\"text\":\"反馈\",\"children\":[{\"text\":\"QQ群\",\"link\":\"https://qm.qq.com/cgi-bin/qm/qr?k=xdCO46fHlVcY7D2L7elXzqcxL3nyTGnW&jump_from=webapi&authKey=uWZooQ2szv+nG/re7luCKn8LW1KibSb0vvi0FycA45Mglm5AGM1GP2iJ+SiWmDwg\"},{\"text\":\"Telegram Group\",\"link\":\"https://t.me/+yeQEhnuT9O41NDM1\"}]},{\"text\":\"Github\",\"link\":\"https://github.com/Starry-Wind/StarRailAssistant\"}],\"sidebar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"children\":[{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"常见问题\",\"link\":\"/guide/qa.html\"}]},{\"text\":\"配置\",\"children\":[{\"text\":\"配置\",\"link\":\"/config/\"},{\"text\":\"配置详细\",\"link\":\"/config/func.html\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
