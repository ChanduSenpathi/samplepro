<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const itemId = route.params.id;

const state = reactive({
    type:'Full-Time',
    title: '',
    location: '',
    description: '',
    salary: '$30k-$50k',
    company: {
        name: '',
        description: '',
        email: '',
        contact : ''
    }
})

const formHandler = async () => {
    const newObj = {
        type: state.type,
        title: state.title,
        location: state.location,
        description: state.description,
        salary: state.salary,
        company: {
            name: state.company.name,
            description: state.company.description,
            contactEmail: state.company.email,
            contactPhone: state.company.contact
        }
    }
    if(itemId){
        try {
            await axios.put(`http://localhost:8000/jobs/${itemId}`, newObj);
            route.push('http://localhost:8000/jobs')
        }catch(error) {
            console.log(error);
        }
    }else {
        
        try {
            const response = await axios.post("http://localhost:8000/jobs", newObj);
            router.push(`/jobs`)
        }catch(error) {
            console.log(error);
        }
    }
}

onMounted(async ()=>{
    if(itemId){
        const response =await axios.get(`http://localhost:8000/jobs/${itemId}`);
        const data = response.data;
        state.type = data.type;
        state.title = data.title;
        state.location = data.location;
        state.description = data.description;
        state.company.name = data.company.name;
        state.company.description = data.company.description;
        state.company.email = data.company.contactEmail;
        state.company.contact = data.company.contactPhone;
    }
})

</script>
<template>
    <section class="common_bg_aliceblue p-4">
        <div class="addjobs_main_container p-4 bg-white rounded">
            <h2>Add Job Details</h2>
            <form @submit.prevent="formHandler">
                <label for="Jobtype">Job Type</label>
                <select class="w-100 px-2 py-1 mb-2" id="Jobtype" v-model="state.type">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                </select>
                <label for="job-title">Job Title</label>
                <input type="text" id="job-title" v-model="state.title" class="w-100 mb-2 px-2 py-1" placeholder="Add job Title here">
                <label for="location">Location</label>
                <input type="text" class="w-100 mb-2 px-2 py-1" v-model="state.location" placeholder="add location">
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="5" v-model="state.description" class="w-100 mb-2 px-2 py-1" placeholder="add description"></textarea>
                <label for="salary">Salary</label>
                <select class="w-100 px-2 py-1 " id="salary" v-model="state.salary">
                    <option value="$30k-$50k">$30k-$50k</option>
                    <option value="$50k-$60k">$50k-$60k</option>
                    <option value="$60k-$80k">$60k-$80k</option>
                    <option value="$80k-$100k">$80k-$100k</option>
                </select>
                <hr />
                <label for="comName">Company Name</label>
                <input type="text" class="w-100 mb-2 px-2 py-1" v-model="state.company.name" placeholder="Add company name">
                <label for="comDesc">Company Description</label>
                <textarea name="companyDescription" id="comDesc" v-model="state.company.description" rows="5" class="w-100 mb-2 px-2 py-1" placeholder="add description"></textarea>
                <label for="email">Email</label>
                <input type="text" class="w-100 mb-2 px-2 py-1" v-model="state.company.email" placeholder="Enter email">
                <label for="contact number">Contact Number</label>
                <input type="numbers" class="w-100 mb-2 px-2 py-1" v-model="state.company.contact" placeholder="Enter Contact Number">
                <button type="submit" class="w-100 py-2 rounded border-0 bg-success text-white">Submit</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
.addjobs_main_container{
    max-width: 600px;
    margin: 0 auto;
}
</style>