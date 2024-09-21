<template>
    <!-- Main Banner -->
    <div class="banner">
        <div class="banner-content">
            <h1 class="text-2xl md:text-6xl text-white font-extrabold">
                Embrace The Art of Elegance
            </h1>
            <p
                class="text-sm md:text-xl text-white font-semibold tracking-wide mt-3 md:mt-5"
            >
                Elevate Your Style With Timeless Classics
            </p>
            <RouterLink to="/new-arrivals">
                <fwb-button class="mt-10 rounded-none" color="light" size="xl"
                    >Shop Now</fwb-button
                >
            </RouterLink>
        </div>
        <img
            src="../assets/banner2.jpg"
            alt="Banner"
            class="object-cover object-center h-80 md:h-[45rem] w-full"
        />
    </div>

    <!-- Category -->
    <div class="mt-20 md:mt-40">
        <div
            class="mb-10 flex flex-col md:flex-row justify-between items-center"
        >
            <h1 class="text-3xl md:text-5xl font-bold tracking-wide mb-5">
                Explore our
                <span class="text-blue-700"> collections </span>
            </h1>
            <RouterLink to="/new-arrivals">
                <fwb-button class="rounded-none" color="light" size="xl"
                    >All Products</fwb-button
                >
            </RouterLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            <div
                v-for="category in categories"
                :key="category"
                class="flex flex-col justify-center items-center text-center transition duration-300 hover:scale-125 cursor-pointer"
            >
                <img
                    class="aspect-square object-cover object-center border border-gray-300"
                    :src="category.image"
                    :alt="category.name"
                />
                <span>
                    {{ category.name }}
                </span>
            </div>
        </div>
    </div>

    <div class="my-20 md:my-40">
        <div class="text-center mb-10">
            <h1 class="text-3xl md:text-5xl font-bold tracking-wide">
                Our Best Sellers
            </h1>
            <p class="text-lg md:text-2xl font-semibold tracking-wide mt-5">
                Upgrade your wardrobe to the next level!
            </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            <div v-for="item in store.results.slice(0, 5)">
                <Product
                    :name="item.name"
                    :price="item.price"
                    :msrp="item.msrp"
                    :image="item.thumbnailImageUrl"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { FwbButton } from "flowbite-vue";
import Product from "../components/Product.vue";
import { useApiStore } from "../stores/api";
import { onMounted, onUnmounted } from "vue";

const store = useApiStore();

const categories = [
    {
        name: "Men",
        image: "/src/assets/category/men.jpg",
    },
    {
        name: "Women",
        image: "/src/assets/category/women.jpg",
    },
    {
        name: "Handbags",
        image: "/src/assets/category/handbag.jpg",
    },
    {
        name: "Shoes",
        image: "/src/assets/category/shoes.jpg",
    },
    {
        name: "Watches",
        image: "/src/assets/category/Watch.jpg",
    },
    {
        name: "Accessories",
        image: "/src/assets/category/accessories.jpg",
    },
];

onMounted(() => {
    store.search({ "bgfilter.ss_category_hierarchy": "All Dresses" });
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
    height: 100%;
    width: 100vw;
    margin-left: calc(50% - 50vw);
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    padding: 1rem;
}

/* @media (min-width: 768px) {
    .banner {
        position: relative;
        height: 100%;
    }

    .banner-content {
        position: absolute;
        top: 2.5rem;
        left: 0;
        transform: none;
        width: 100%;
        text-align: left;
        padding: 2.5rem;
    }
} */
</style>
