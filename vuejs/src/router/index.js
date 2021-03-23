import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const David = () => import(/* webpackChunkName: "david" */ "../views/David.vue");
const Names = () => import(/* webpackChunkName: "Names" */ "../views/Names.vue");
const asynchronous = () => import(/* webpackChunkName: "asynchronous" */ "../views/asynchronous/asynchronous.vue");
const test = () => import(/* webpackChunkName: "test" */ "../views/Test.vue");
const form = () => import(/* webpackChunkName: "test" */ "../views/Form.vue");
const FormsSecond = () => import(/* webpackChunkName: "test" */ "../views/FormSecond.vue");
const inputAddDelete = () => import(/* webpackChunkName: "test" */ "../views/inputAddDelete.vue");
const todoList = () => import(/* webpackChunkName: "test" */ "../views/todo2.vue");




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/david",
    name: "David",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: David,
  },
  {
    path: "/Names",
    name:'Names',
    component: Names,

  },
  {
    path: "/asynchronous",
    name:'asynchronous',
    component: asynchronous,
  },
  {
    path: "/test",
    name:'test',
    component: test,
  },
  {
    path: "/Form",
    name:'Form',
    component: form,
  },
  {
    path: "/FormSecond",
    name:'FormSecond',
    component: FormsSecond,
  },
  {
    path: "/inputAddDelete",
    name:'inputAddDelete',
    component: inputAddDelete,
  },
  {
    path: "/todoList",
    name:'todoList',
    component: todoList,
  },
  
];

const router = new VueRouter({
  routes
});


export default router;
