<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import jobs from "@/jobs.json"
import axios from 'axios';
const route = useRoute();
const itemId = route.params.id; 

let state = reactive({
    details : {},
    loading: true
})

onMounted(async() =>{
    try {
        const response = await axios.get(`http://localhost:8000/jobs/${itemId}`)
        state.details = response.data;
    } catch (error) {
        console.log(error);        
    }finally {
        state.loading = false;
    }
})


</script>

<template>
    <section class="p-3 common_bg_aliceblue">
        <div v-if="state.loading">
            <div class="spinner-border text-primary mx-auto" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else="state.loading" class="d-flex justify-content-between flex-wrap flex-md-nowrap ">
            <div>
                <div class="bg-white p-4 rounded my-2 mx-2">
                    <span>{{ state.details.type }}</span>
                    <h1>{{ state.details.title }}</h1>
                    <i class="pi pi-map-marker text-danger"></i>
                    <span class="text-danger mx-2">{{ state.details.location }}</span>
                </div>
                <div class="p-4 rounded bg-white mx-2">
                    <h4>Job Description</h4>
                    <p>{{ state.details.description }}</p>
                    <h5>Salary</h5>
                    <span>{{ state.details.salary }}</span>
                </div>
            </div>
            <div>
                <div class="bg-white p-4 rounded my-2">
                    <span>Company Info</span>
                    <div>
                        <h4 class="mt-3">{{ state.details.company.name }}</h4>
                        <p class="py-4 border_bottom">{{ state.details.company.description }}</p>
                        <form>
                            <div class="d-flex flex-column ">
                                <span class="fw-bold">Contact Email</span>
                                <span>{{state.details.company.contactEmail }}</span>
                            </div>
                            <div class="d-flex flex-column ">
                                <span class="fw-bold">Contact Phone</span>
                                <span>{{ state.details.company.contactPhone }}</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="p-4 rounded bg-white">
                    <h3>Manage Jobs</h3>
                    <RouterLink :to="`edit/${itemId}`" class="bg-success d-block  my-3 py-2 px-4 text-white rounded w-100 text-center">Edit Job</RouterLink>
                    <RouterLink :to="`delete/${itemId}`" class="bg-danger d-block py-2 px-4 text-white rounded w-100 text-center">Delete Job</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.border_bottom {
    border-bottom: 1px solid black;
}
</style>