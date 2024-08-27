<script setup>
import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
import JobsList from '@/components/JobsList.vue';
</script>

<template>
    <Hero />
  <HomeCards/>
  <JobsList :listing="3"/>
</template>