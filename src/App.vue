<template>
    <div class="container mx-auto">
        <div class="flex">
            <Navbar />
        </div>
    </div>
    <div class="border-b-4 border-b-purple-700"></div>
    <div class="container mx-auto py-10 px-5 md:px-0">
        <div
            v-if="store.pagination"
            class="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0"
        >
            <p class="text-purple-700 font-medium">
                Showing {{ store.pagination.begin }} to
                {{ store.pagination.end }} of
                {{ store.pagination.totalResults }} results for "{{
                    store.query
                }}"
            </p>
            <fwb-pagination
                v-model="currentPage"
                :total-pages="store.pagination.totalPages"
                :show-icons="true"
                :show-labels="false"
                @page-changed="paginate"
            ></fwb-pagination>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 py-10">
            <div v-for="item in store.results">
                <Product
                    :name="item.name"
                    :price="item.price"
                    :msrp="item.msrp"
                    :image="item.thumbnailImageUrl"
                />
            </div>
        </div>
        <div v-if="store.pagination" class="w-full flex justify-center">
            <fwb-pagination
                v-model="currentPage"
                :total-pages="store.pagination.totalPages"
                :show-icons="true"
                :show-labels="false"
                @page-changed="paginate"
            ></fwb-pagination>
        </div>
    </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Product from "./components/Product.vue";
import { FwbPagination } from "flowbite-vue";
import { useApiStore } from "./stores/api";
import { ref } from "vue";

const store = useApiStore();
const currentPage = ref(store.pagination.currentPage);

function paginate() {
    store.search(store.query, currentPage.value);
}
</script>

<style>
nav[aria-label="Navigation"] button {
    @apply border-none bg-transparent;
}
</style>
