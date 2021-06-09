import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/exercice",
    name: "Exercice",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercice.vue")
  },
  {
    path: "/form",
    name: "Formulaire",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Form.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
