import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import NewArrivals from "../pages/NewArrivals.vue";
import BestSellers from "../pages/BestSellers.vue";
import Accessories from "../pages/Accessories.vue";
import Sale from "../pages/Sale.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/products/:q?",
        name: "products",
        component: Products,
    },
    {
        path: "/new-arrivals",
        name: "new-arrivals",
        component: NewArrivals,
    },
    {
        path: "/best-sellers",
        name: "best-sellers",
        component: BestSellers,
    },
    {
        path: "/accessories",
        name: "accessories",
        component: Accessories,
    },
    {
        path: "/sale",
        name: "sale",
        component: Sale,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
