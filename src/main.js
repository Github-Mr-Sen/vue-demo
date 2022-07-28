import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";
import store from "@/store";

//axios
import axios from 'axios'
Vue.prototype.$axios = axios

require("./mock")

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,

  mounted() {
    console.log("aaaa",this.$store)
  }
}).$mount('#app')
