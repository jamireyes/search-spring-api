<template>
    <p class="text-sm text-gray-700 font-medium">
        Showing {{ store.pagination.begin }} to {{ store.pagination.end }} of
        {{ store.pagination.totalResults }} results for "{{ store.params.q }}"
    </p>
</template>

<script setup>
import { useApiStore } from "../stores/api";

const store = useApiStore();
</script>
