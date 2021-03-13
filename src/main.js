import Vue from "vue";
import App from "./App.vue";
import store from "./store/modules/surveys";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
