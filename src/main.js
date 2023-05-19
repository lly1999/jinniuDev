import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
import DataVVue3 from '@kjgl77/datav-vue3'
initAMapApiLoader({
    key: '165ffdb04e5182122b110a5d3e9928e2'
})
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn';


const app = createApp(App)
    app.use(router)
    .use(ElementPlus, {
          locale: zhCn,
    })
    app.use(VueAMap)
    app.use(DataVVue3)
    app.mount('#app')
