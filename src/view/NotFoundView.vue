<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <section class="d-flex justify-content-center align-items-center m-5">
        <div class="h-100 d-flex flex-column align-items-center">
            <i class="pi pi-exclamation-triangle notfound-icon text-warning"></i>
            <h2 class="fw-bold text-center my-4">404 Error</h2>
            <h3 class="text-center my-4">Page Not Found</h3>
            <RouterLink to="/" class="bg-success text-white rounded px-3 py-2">Go Back</RouterLink>
        </div>
    </section>
</template>

<style scoped>
.notfound-icon {
    font-size: 40px;
}
.notfound-icon + h2 {
    font-size: 50px;
}
</style>