import "./assets/css/reset.css";
import "./assets/rem";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "../http";

Vue.config.productionTip = false;

import {
  Button,
  Col,
  Row,
  Icon,
  Field,
  CellGroup,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem
} from "vant";

Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Field)
  .use(CellGroup)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem);

//将http挂载在Vue的prototype上
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
