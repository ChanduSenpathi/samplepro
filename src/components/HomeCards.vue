<script setup>
import { RouterLink } from 'vue-router';
import Cards from './Cards.vue';


</script>

<template>
    <section class="p-3 d-flex justify-content-center gap-3 w-100 flex-wrap align-items-center">
        <Cards>
            <h3 class="fw-bold">For Developers</h3>
            <p>Browse our React Jobs and start your career today</p>
            <RouterLink to="/jobs" class="custom-anchor-btn d-inline-block bg-black">Browse Jobs</RouterLink>
        </Cards>
        <Cards bg="additional-cards-container">
            <h3 class="fw-bold">For Employers</h3>
            <p>List your job to find the perfect developer for the role</p>
            <RouterLink to="/addjobs" class="custom-anchor-btn d-inline-block">Add Jobs</RouterLink>
        </Cards>
    </section>
</template>

<style scoped>
.cards-container {
    background-color: rgb(239, 237, 237);
}
.additional-cards-container {
    background-color: rgb(201, 246, 201);
}
</style>