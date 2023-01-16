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

const app = createApp(App)
    app.use(router)
    app.use(ElementPlus)
    app.use(VueAMap)
    app.use(DataVVue3)
    app.mount('#app')
