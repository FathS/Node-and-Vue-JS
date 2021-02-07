import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/"
});
Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
