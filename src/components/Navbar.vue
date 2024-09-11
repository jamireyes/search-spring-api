<template>
    <div
        class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 py-5 px-5 md:px-0 w-full"
    >
        <a href="/" class="relative">
            <div>
                <Logo class="h-10" />
            </div>
            <p class="subheader">Springly Fashion</p>
        </a>
        <div class="flex space-x-2 w-full md:w-auto">
            <SearchInput
                placeholder="Search for Products, Brands, Colors..."
                @query="search"
            />
        </div>
    </div>
</template>

<script setup>
import { useApiStore } from "../stores/api";
import Logo from "./icons/Logo.vue";
import SearchInput from "./SearchInput.vue";

const store = useApiStore();

function search(query) {
    store.search(query);
    console.log(store.data);
}
</script>

<style scoped>
.subheader {
    position: absolute;
    bottom: -0.75rem;
    right: 0px;
    text-transform: uppercase;
    color: #00cee1;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
