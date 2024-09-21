<template>
    <div class="relative mb-5 flex flex-col justify-center cursor-pointer">
        <img :src="image" :alt="name" loading="lazy" />
        <Badge v-if="hasSale"> On Sale </Badge>
        <div class="pt-4 text-sm space-y-2">
            <p class="text-gray-600">
                {{ name }}
            </p>
            <div class="space-x-2">
                <span
                    class="font-semibold"
                    :class="{
                        'text-blue-700': hasSale,
                    }"
                >
                    {{ currencyPrice(price) }}
                </span>
                <span
                    v-if="hasSale"
                    :class="{ 'line-through text-gray-500': hasSale }"
                >
                    {{ currencyPrice(msrp) }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Badge from "./Badge.vue";
import { computed } from "vue";

const props = defineProps(["name", "price", "msrp", "image"]);

function currencyPrice(price) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return formatter.format(parseInt(price));
}

const hasSale = computed(() => {
    return parseInt(props.price) < parseInt(props.msrp);
});
</script>
