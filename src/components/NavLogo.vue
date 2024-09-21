<template>
    <RouterLink to="/" class="relative">
        <Logo class="h-10" />
        <!-- <p class="subheader">Springly Fashion</p> -->
    </RouterLink>
</template>

<script setup>
import Logo from "./icons/Logo.vue";
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
