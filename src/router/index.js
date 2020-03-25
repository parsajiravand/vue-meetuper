import Vue from "vue";
import Router from "vue-router";

import PageHome from "../pages/PageHome.vue";
import PageMeetUpDetail from "../pages/PageMeetUpDetail.vue";
import PageMeetUpFind from "../pages/PageMeetUpFind.vue";
import PageNotFound from "../pages/PageNotFound.vue";

Vue.use(Router);
const router = new Router({
  routes: [
    { path: "/", name: "PageHome", component: PageHome },
    {
      path: "/meetups/:id",
      name: "PageMeetUpDetail",
      component: PageMeetUpDetail
    },
    { path: "/find", name: "PageFind", component: PageMeetUpFind },
    { path: "*", name: "PageNotFound", component: PageNotFound }
  ],
  mode: "history"
});
export default router;
