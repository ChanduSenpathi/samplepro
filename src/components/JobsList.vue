<script setup>
    import {
        onMounted,
        ref,
        defineProps,
        reactive
    } from 'vue'
    import SingleList from './SingleList.vue';
import axios from 'axios';


    const state = reactive({
        jobsData : []
    });

    onMounted(async() => {
        try{
            const response = await axios.get('http://localhost:8000/jobs');
            state.jobsData = response.data;            
        }catch(err) {
            console.log(err);
        }
    })
    defineProps({
        listing: Number
    })


</script>

<template>
    <section class="container-fluid p-0 m-0">
        <div class="jobs-container">
            <div class="p-2">
                <h2 class="text-center fw-bold my-3">Browse Jobs</h2>
                <div class="row g-3 justify-content-center">
                    <SingleList 
                    v-for="job in state.jobsData.slice(0, listing || state.jobsData.length)" 
                    :key="job.id" 
                    :job="job"/>
                </div>
            </div>
        </div>
    </section>
    <!-- <div class="m-4 text-center">
        <RouterLink to="/jobs" class="text-white bg-black px-5 py-3 rounded">See More Jobs</RouterLink>
    </div> -->
</template>

<style>
    .jobs-container {
        background-color: rgba(210, 243, 255, 0.4);
    }

    .max-width {
        max-width: 400px;
    }
</style>