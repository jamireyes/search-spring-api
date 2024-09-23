<template>
    <div class="container mx-auto md:px-4 lg:px-0 pb-10">
        <div class="banner full-bleed">
            <img
                src="../assets/banner4.jpg"
                alt="banner"
                class="object-cover object-center w-full h-25 md:h-72"
            />
            <h1
                class="banner-content text-4xl md:text-7xl tracking-widest text-white font-bold"
            >
                New Arrivals
            </h1>
        </div>
        <div
            v-if="store.pagination"
            class="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 mt-10"
        >
            <Breadcrumbs :links="links" />
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
import Breadcrumbs from "../components/Breadcrumbs.vue";
import { FwbPagination } from "flowbite-vue";
import { useApiStore } from "../stores/api";
import { ref, onMounted, onUnmounted } from "vue";

const store = useApiStore();
const currentPage = ref(store.pagination.currentPage);
const links = [
    {
        name: "New Arrivals",
        path: "",
    },
];

function paginate() {
    store.search({ page: currentPage.value });
}

onMounted(() => {
    store.search({
        "bgfilter.days_since_published.low": "*",
        "bgfilter.days_since_published.high": "30",
    });
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

.banner {
    position: relative;
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    padding: 1.25rem;
}
</style>
