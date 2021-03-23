import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios"
Vue.config.productionTip = false;
// Vue.use(axios)
// Vue.prototype.$axios = axios
// Vue.mixin({ // do not do this in real project please
//   mounted(){
//     console.log("I am student")
//   }
// })

new Vue({
  // David,
  // axios,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
