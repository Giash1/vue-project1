import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CatagoriesView from "../views/ProCatagoryView.vue/CatagoriesView.vue";
import CatagoryDetailsView from "../views/ProCatagoryView.vue/CatagoryDetailsView.vue";
import ContactView from "../views/ContactView.vue";
import MemberView from "../views/MemberView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyPageView from "../views/MyPageView.vue";
import SearchView from "../views/SearchView.vue";
import ExistPageView from "../views/ExistPageView.vue";
import GarmentsProducts from "../views/ProCatagoryView.vue/GarmentsProducts.vue";
import GrossariesProducts from "../views/ProCatagoryView.vue/GrossariesProducts.vue";
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
      path: "/catagories",
      name: "catagories",
      component: CatagoriesView,
    },
    {
      path: "/catagories/:id",
      name: "catagoryDetails",
      component: CatagoryDetailsView,
      props: true,
    },
    {
      path: "/garments",
      name: "garments",
      component: GarmentsProducts,
    },
    {
      path: "/grossaries",
      name: "grossaries",
      component: GrossariesProducts,
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
    // redirective will be used as a path instead of a current path
    // {
    //   path: "/all-search",
    //   name: "search",
    //   component: SearchView,

    // },
    // catchall 404
    {
      path: "/:catchAll(.*)",
      name: "existpage",
      component: ExistPageView,
    },
  ],
});

export default router;
