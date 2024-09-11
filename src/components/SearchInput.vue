<template>
    <input
        v-model="query"
        @keyup.enter="$emit('query', query)"
        type="text"
        class="block w-full md:w-80 text-sm text-neutral-900 border border-neutral-300 rounded-md bg-neutral-50 focus:ring-blue-500 focus:border-blue-500"
        :placeholder="placeholder"
        required
    />
    <fwb-button color="purple" @click="$emit('query', query)"
        ><svg
            class="w-4 h-4 text-white"
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
    </fwb-button>
</template>

<script setup>
import { FwbButton } from "flowbite-vue";
import { ref } from "vue";

defineProps(["placeholder"]);
defineEmits(["query"]);

const query = ref();
</script>
