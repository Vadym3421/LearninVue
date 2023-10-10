import { createRouter, createWebHistory } from "vue-router";
import TMain from "../pages/TMain.vue";
import PostPage from "../pages/PostPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import PostItemPage from "../pages/PostItemPage.vue";
import PostPageWithStore from "../pages/PostPageWithStore.vue";

const routes = [
  {
    path: "/",
    component: TMain,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: PostItemPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
