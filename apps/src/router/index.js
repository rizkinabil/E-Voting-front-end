import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/SignUp.vue";
import Signin from "../views/SignIn.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/SignIn",
      name: "SignIn",
      component: Signin,
   },
   {
      path: "/SignUp",
      name: "SignUp",
      component: Signup,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;