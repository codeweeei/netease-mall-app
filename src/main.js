import "./assets/css/reset.css";
import "./assets/rem";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { Button, Col, Row, Icon, Field, CellGroup } from "vant";

Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Field)
  .use(CellGroup);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
