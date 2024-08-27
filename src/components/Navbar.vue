<script setup>

import { RouterLink, useRoute } from 'vue-router';
import logo from '../assets/images/logo.png'
import {ref} from 'vue';



const link = ref('https://react.dev/')

const isActive = (path) => {
    const route = useRoute();
    return route.path === path;
}

</script>

<template>
    <nav class="custom-green-bg p-3 d-flex justify-content-center  justify-content-md-between justify-content-sm-center align-items-center gap-sm-2 position-sticky top-0 left-0 w-100">
        <a :href="link" class="logo_anchor d-inline-block bg-white p-2">
            <img :src="logo" alt="logo">
        </a>
        <div>
            <RouterLink to="/"  :class="[isActive('/') ? 'active' : '' ,'mx-2', 'text-white', 'p-2', 'rounded']">Home</RouterLink>
            <RouterLink to="/jobs" :class="[isActive('/jobs') ? 'active' : '' ,'mx-2', 'text-white', 'p-2', 'rounded']">Jobs</RouterLink>
            <RouterLink to="/addjobs" :class="[isActive('/addjobs') ? 'active' : '' ,'mx-2', 'text-white', 'p-2', 'rounded']">Add Jobs</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.logo_anchor {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.logo_anchor > img {
    width: 100%;
    height: 100%;
}
a:hover{
    background-color: rgb(69, 101, 69);
}
.active {
    background-color: rgb(16, 75, 16);
}
</style>