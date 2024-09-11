<template>
    <div class="mb-5">
        <img :src="image" :alt="name" loading="lazy" />
        <div class="pt-4 text-sm text-center space-y-2">
            <p class="text-gray-600">
                {{ name }}
            </p>
            <div class="space-x-2">
                <span
                    :class="{ 'text-purple-800 font-semibold': [price < msrp] }"
                >
                    {{ currencyPrice(price) }}
                </span>
                <span
                    v-if="price < msrp"
                    :class="{ 'line-through text-gray-500': [price < msrp] }"
                >
                    {{ currencyPrice(msrp) }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["name", "price", "msrp", "image"]);

function currencyPrice(price) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return formatter.format(price);
}
</script>
