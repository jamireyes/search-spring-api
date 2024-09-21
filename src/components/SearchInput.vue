<template>
    <div class="flex space-x-1">
        <input
            v-model="query"
            @keyup.enter="submitSearch(query)"
            type="text"
            class="block w-full md:w-80 text-sm text-neutral-900 border border-gray-300 bg-neutral-50 focus:ring-indigo-500 focus:border-indigo-500"
            :placeholder="placeholder"
            required
        />
        <button
            @click="submitSearch(query)"
            class="text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 border border-gray-300 text-sm p-2.5 me-1"
        >
            <span class="flex justify-center items-center">
                <svg
                    v-if="!store.loading"
                    class="size-4 text-gray-600"
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
            </span>
        </button>
    </div>
</template>

<script setup>
import { useApiStore } from "../stores/api.js";
import { ref } from "vue";

defineProps(["placeholder"]);
const emit = defineEmits(["query"]);

const store = useApiStore();
const query = ref();

function submitSearch(query) {
    if (query) {
        emit("query", query);
    }
}
</script>
