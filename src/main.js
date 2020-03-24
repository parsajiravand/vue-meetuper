import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import AppDropdown from "./components/shared/AppDropdown";
import AppHero from "./components/shared/AppHero";
import moment from "moment";

Vue.config.productionTip = false;

Vue.component("AppHero", AppHero);
Vue.component("AppDropdown", AppDropdown);
Vue.filter("Capital", value => {
  if (value && typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return "";
});
Vue.filter("formatDate", (value, formatType = "LL") => {
  if (value) {
    return moment(value).format(formatType);
  }
  return "";
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
