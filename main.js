import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

import team from './pages/kys/team/team.vue'
Vue.component('team', team)
import shopping from './pages/kys/shopping/shopping.vue'
Vue.component('shopping', shopping)
import introduce from './pages/kys/introduce/introduce.vue'
Vue.component('introduce', introduce)
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
Vue.component('mescroll', MescrollUni)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
