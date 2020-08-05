import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index";
import CharBottom from "../components/CharBottom";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/char',
    name: 'char',
    component: CharBottom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
