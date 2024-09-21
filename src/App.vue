<template>
    <div class="p-1 bg-black text-xs md:text-sm text-white text-center">
        🎉 Get Extra 20% off on your next purchase!
    </div>
    <div class="relative overflow-x-hidden">
        <Navbar />
        <main class="container mx-auto px-4 md:px-0 mb-10">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
nav[aria-label="Navigation"] button {
    @apply border-none bg-transparent;
}
</style>
