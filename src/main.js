import Vue from 'vue'
import App from './App.vue'
import './css/common.css'
Vue.config.productionTip = false
import { Button } from 'element-ui';
Vue.use(Button)
new Vue({
    render: h => h(App),
}).$mount('#app')