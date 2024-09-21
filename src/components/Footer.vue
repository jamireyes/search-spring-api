<template>
    <footer class="w-full">
        <div class="border-y py-10">
            <div
                class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-0"
            >
                <div class="flex flex-col space-y-1">
                    <h1 class="font-semibold mb-2">Shop</h1>
                    <a href="#" class="text-sm">New Arrivals</a>
                    <a href="#" class="text-sm">Best Sellers</a>
                    <a href="#" class="text-sm">Accessories</a>
                    <a href="#" class="text-sm">Sale</a>
                </div>
                <div class="flex flex-col space-y-1">
                    <h1 class="font-semibold mb-2">Support</h1>
                    <a href="#" class="text-sm">Shipping and Returns</a>
                    <a href="#" class="text-sm">Privacy Policy</a>
                    <a href="#" class="text-sm">Terms and Conditions</a>
                    <a href="#" class="text-sm">FAQ</a>
                </div>
                <div class="flex flex-col space-y-1">
                    <h1 class="font-semibold mb-2">Company</h1>
                    <a href="#" class="text-sm">About</a>
                    <a href="#" class="text-sm">Contact</a>
                    <a href="#" class="text-sm">Careers</a>
                </div>
                <div class="col-span-full md:col-auto">
                    <p>Sign up to our newsletter!</p>
                    <p class="text-xs text-gray-500 mt-1 mb-4">
                        Receive the latest updates, offers, coupons and more.
                    </p>
                    <fwb-input
                        class="rounded-none"
                        placeholder="Enter your email address"
                        size="lg"
                    >
                        <template #suffix>
                            <fwb-button color="dark" class="rounded-none"
                                >Submit</fwb-button
                            >
                        </template>
                    </fwb-input>
                </div>
            </div>
            <!-- Social links -->
            <div class="flex justify-center items-center space-x-5 pt-10">
                <Instagram
                    class="size-5 text-gray-800 transition duration-300 hover:scale-125 cursor-pointer"
                />
                <Facebook
                    class="size-5 text-gray-800 transition duration-300 hover:scale-125 cursor-pointer"
                />
                <Twitter
                    class="size-5 text-gray-800 transition duration-300 hover:scale-125 cursor-pointer"
                />
                <Youtube
                    class="size-5 text-gray-800 transition duration-300 hover:scale-125 cursor-pointer"
                />
            </div>
        </div>
        <div class="w-full text-center text-xs py-5">
            © 2024 Search Spring All rights reserved
        </div>
    </footer>
</template>

<script setup>
import Instagram from "./icons/Instagram.vue";
import Facebook from "./icons/Facebook.vue";
import Youtube from "./icons/Youtube.vue";
import Twitter from "./icons/Twitter.vue";
import { FwbButton, FwbInput } from "flowbite-vue";
</script>
