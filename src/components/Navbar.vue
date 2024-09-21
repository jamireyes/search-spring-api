<template>
    <nav class="bg-white border-y border-gray-300">
        <div
            class="container mx-auto px-4 py-4 xl:py-8 xl:px-0 flex flex-wrap items-center justify-between"
        >
            <NavLogo />
            <div class="flex xl:order-2">
                <div class="flex space-x-4">
                    <div class="hidden xl:block">
                        <SearchInput
                            class="w-full"
                            placeholder="Search for Products, Brands, Colors..."
                            @query="redirectToProducts"
                        />
                    </div>
                    <button
                        type="button"
                        class="text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-sm p-2.5 me-1"
                    >
                        <div class="flex flex-wrap space-x-2">
                            <Cart class="text-gray-600 size-5" />
                            <span
                                class="hidden xl:block text-gray-700 font-medium"
                                >Cart</span
                            >
                        </div>
                    </button>
                </div>
                <button
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    @click="isHidden = !isHidden"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
            <div
                :class="{ hidden: isHidden }"
                class="items-center justify-between w-full xl:flex xl:w-auto xl:order-1"
            >
                <div class="flex mt-6 w-full xl:hidden">
                    <SearchInput
                        class="w-full"
                        placeholder="Search for Products, Brands, Colors..."
                        @query="redirectToProducts"
                    />
                </div>
                <ul
                    class="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-300 xl:space-x-10 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white"
                >
                    <li v-for="navlink in navlinks" :key="navlink">
                        <RouterLink
                            :to="navlink.path"
                            class="block py-2 px-3 text-gray-700 xl:bg-transparent xl:p-0"
                            aria-current="page"
                        >
                            {{ navlink.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import NavLogo from "./NavLogo.vue";
import SearchInput from "./SearchInput.vue";
import Cart from "./icons/Cart.vue";

import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const isHidden = ref(true);

const navlinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "New Arrivals",
        path: "/new-arrivals",
    },
    {
        name: "Best Sellers",
        path: "/best-sellers",
    },
    {
        name: "Accessories",
        path: "/accessories",
    },
    {
        name: "Sale",
        path: "/sale",
    },
];

function redirectToProducts(query) {
    router.push({
        name: "products",
        params: {
            q: query,
        },
    });
}
</script>

<style scoped>
.router-link-exact-active {
    @apply text-blue-700;
}
</style>
