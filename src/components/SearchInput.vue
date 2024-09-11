<template>
    <input
        v-model="query"
        @keyup.enter="$emit('query', query)"
        type="text"
        class="block w-full md:w-80 text-sm text-neutral-900 border border-neutral-300 rounded-md bg-neutral-50 focus:ring-blue-500 focus:border-blue-500"
        :placeholder="placeholder"
        required
    />
    <fwb-button color="purple" @click="$emit('query', query)">
        <span class="flex justify-center items-center">
            <svg
                v-if="!store.loading"
                class="size-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
            <Loading v-else class="w-4" color="#FFF" />
        </span>
    </fwb-button>
</template>

<script setup>
import Loading from "./icons/Loading.vue";
import { FwbButton } from "flowbite-vue";
import { useApiStore } from "../stores/api.js";
import { ref } from "vue";

defineProps(["placeholder"]);
defineEmits(["query"]);

const store = useApiStore();
const query = ref();
</script>
