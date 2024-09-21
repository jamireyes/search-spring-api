<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol
            class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
            <li class="inline-flex items-center">
                <RouterLink
                    to="/"
                    class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                    Home
                </RouterLink>
            </li>
            <li v-for="link in links" :key="link">
                <div v-if="!link.path" class="flex items-center">
                    <svg
                        class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span
                        class="ms-1 text-sm font-medium text-gray-800 md:ms-2"
                        >{{ link.name }}</span
                    >
                </div>
                <RouterLink v-else :to="link.path" class="flex items-center">
                    <svg
                        class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span
                        class="ms-1 text-sm font-medium text-gray-800 md:ms-2"
                        >{{ link.name }}</span
                    >
                </RouterLink>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["links"]);

console.log(props.links);
</script>
