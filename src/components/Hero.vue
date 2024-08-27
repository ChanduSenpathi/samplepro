<script setup>
import { defineProps } from 'vue';
defineProps({
    title : {
        type : String,
        default: 'Become a React js Developer'
    },
    subtitle : {
        type : String,
        default: 'Find the jobs that sets your skills'
    }
})
</script>

<template>
    <header class="text-center custom-green-bg py-5 text-white">
        <h1 > {{ title }}</h1>
        <p>{{ subtitle }}</p>
    </header>
</template>