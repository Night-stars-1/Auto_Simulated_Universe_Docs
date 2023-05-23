export const siteData = JSON.parse("{\"base\":\"/Honkai-Star-Rail-Docs/\",\"lang\":\"en-US\",\"title\":\"崩坏：星穹铁道小助手文档\",\"description\":\"崩坏：星穹铁道小助手文档\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
