import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BranchView from "../views/BranchView.vue";
import ContactView from "../views/ContactView.vue";
import MemberView from "../views/MemberView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyPageView from "../views/MyPageView.vue";
import SearchView from "../views/SearchView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/branch",
      name: "branch",
      component: BranchView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/member",
      name: "member",
      component: MemberView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/mypage",
      name: "mypage",
      component: MyPageView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
  ],
});

export default router;
