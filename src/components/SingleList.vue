
<script setup>
    import {
        defineProps, computed, ref
    } from 'vue';
import { RouterLink } from 'vue-router';

    const isTrue = ref(false);

    const props = defineProps({
        job: Object,
    })

    const toggleTruncate = () => {
        isTrue.value = !isTrue.value;
    }

    const truncateDesc = computed(() => {
        let description = props.job.description;
        if (!isTrue.value) {
                description = description.substring(0, 150) + '...'
            }
        return description
    })
</script>
<template>
    <div class="col-md-4 p-3 rounded bg-white max-width w-100 mx-3 d-flex flex-column justify-content-between">
        <span>{{ job.type }}</span>
        <h4 class="fw-bold">{{ job.title }}</h4>
        <p>{{ truncateDesc }}
            <button type="button" class="common-remove-button-bg p-0 text-success" @click="toggleTruncate">
                {{ isTrue ? 'See Less' : 'Read more'}}
            </button>
        </p>
        <span class="text-success border-bottom py-2">{{ job.salary }}</span>
        <div class="d-flex align-items-center gap-2">
            <i class="pi pi-map-marker text-danger"></i>
            <span class="text-danger d-block my-3">{{ job.location }}</span>
        </div>
        <RouterLink :to="`/jobs/${job.id}`" class="w-100 text-center d-block bg-success text-white rounded px-2 py-1 my-2">Read More</RouterLink>
    </div>
</template>