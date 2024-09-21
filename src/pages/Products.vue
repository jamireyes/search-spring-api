<template>
    <div class="container mx-auto pb-10">
        <div class="full-bleed">
            <img
                src="../assets/banner5.jpg"
                alt="banner"
                class="object-cover object-top w-full h-25 md:h-72"
            />
        </div>
        <div
            v-if="store.pagination"
            class="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 mt-10"
        >
            <PaginationResult />
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
import Product from "../components/Product.vue";
import PaginationResult from "../components/PaginationResult.vue";
import { FwbPagination } from "flowbite-vue";
import { useApiStore } from "../stores/api";
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useApiStore();

const currentPage = ref(store.pagination.currentPage);

function paginate() {
    store.search({ page: currentPage.value });
}

watch(
    () => route.params.q,
    (query) => {
        store.search({ q: query });
    }
);

onMounted(() => {
    store.search({ q: route.params.q });
});

onUnmounted(() => {
    store.$reset();
});
</script>

<style scoped>
.full-bleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
}
</style>
