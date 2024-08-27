import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import JobsView from "@/view/JobsView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import JobDetailsView from "@/view/JobDetailsView.vue";
import AddFormView from "@/view/AddFormView.vue";



const router  = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/',
            component : HomeView,
            name: 'home'
        },
        {
            path : '/jobs',
            component : JobsView,
            name: 'jobs'
        },
        {
            path : '/jobs/:id',
            component : JobDetailsView,
            name: 'jobdetails'
        },
        {
            path : '/addjobs',
            component : AddFormView,
            name: 'addjobs'
        },
        {
            path: '/jobs/edit/:id',
            component : AddFormView,
            name: 'edit-job'
        },
        {
            path : '/:catchAll(.*)',
            component : NotFoundView,
            name: 'notfound'
        }
    ]
})

export default router