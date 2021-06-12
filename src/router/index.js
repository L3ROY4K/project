import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import biography from "@/views/biography.vue";
import were from "@/views/were.vue";
import contacts from "@/views/contacts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/biography",
    name: "Биография",
    component: biography,
  },
  {
    path: "/were",
    name: "Где был",
    component: were,
  },
  {
    path: "/contacts",
    name: "Контакты",
    component: contacts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;