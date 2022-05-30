import Vue from 'vue'
import App from './App.vue'

import ChrisUI from './libs/chris-ui'

Vue.config.productionTip = false

Vue.use(ChrisUI)

new Vue({
    render: h => h(App)
}).$mount('#app')
