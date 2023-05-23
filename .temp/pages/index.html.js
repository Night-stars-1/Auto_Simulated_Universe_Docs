export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/love!.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/config/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"嘤嘤嘤\",\"details\":\"嘤嘤，嘤嘤嘤\"},{\"title\":\"嘤嘤嘤\",\"details\":\"嘤嘤，嘤嘤嘤\"},{\"title\":\"嘤嘤嘤\",\"details\":\"嘤嘤，嘤嘤嘤\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present Evan You\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
