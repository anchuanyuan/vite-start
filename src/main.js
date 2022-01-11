import { createApp } from "vue"
import App from "./App.vue"
// 引入 router 路由
import router from "./router"
// Normalize.css 使浏览器呈现所有 HTML 元素更加一致，并且符合现代 web 标准
import "normalize.css"
// 注册图标
import "virtual:svg-icons-register"
// 组件库
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
// 引入tailwindcss
import './assets/css/index.css'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
console.log({ router })
app.mount("#app")
