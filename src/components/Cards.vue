<script setup>
 import { defineProps } from 'vue';

 defineProps({
    bg: {
        type: String,
        default : 'cards-container'
    }
 })
</script>

<template>
    <div  :class="`${bg} p-3 rounded flex-grow-1`">
        <slot></slot>
    </div>
</template>

