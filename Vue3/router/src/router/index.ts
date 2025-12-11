import { createRouter, createWebHistory } from "vue-router";
import Cats from "@/pages/Cats.vue";
import Dogs from "@/pages/Dogs.vue";
import Students from "@/pages/Students.vue";
import Detail from "@/components/Detail.vue";
import DetailParams from "@/components/DetailParams.vue";
import Home from "@/components/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "HomePage",
      path: "/",
      component: Home,
    },
    {
      path: "/cats",
      component: Cats,
    },
    {
      path: "/dogs",
      component: Dogs,
    },
    {
      path: "/students",
      component: Students,
      children: [
        { path: "detail", component: Detail },
        {
          // path: "detailParams/:name/:email/:phone/:address/",
          path: "detailParams",
          component: DetailParams,
          props(route) {
            return route.query;
          },
        },
      ],
    },
  ],
});

export default router;
