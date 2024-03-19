import { createRouter, createWebHistory } from "vue-router";
import InvoiceIndex from '../component/invoices/index.vue';
import NotFound from "../component/NotFound.vue";

const routes = [
    {
        path:'/',
        component: InvoiceIndex
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router