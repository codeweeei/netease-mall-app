import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Search from "../views/Search/Search.vue";
import Category from "../views/Category/Category.vue";
import ItemDetail from "../views/ItemDetail/ItemDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/cateList",
    name: "Category",
    component: Category
  },
  {
    path: "/item",
    name: "ItemDetail",
    component: ItemDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
