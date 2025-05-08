<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const features = [
    {
        name: "Nuxt",
        description: "The latest version of the intuitive Vue framework.",
        icon: "simple-icons:nuxtdotjs"
    },
    {
        name: "Tailwind CSS v4",
        description: "Modern utility-first CSS framework.",
        icon: "simple-icons:tailwindcss"
    },
    {
        name: "TypeScript",
        description: "Enhanced developer experience with type safety.",
        icon: "simple-icons:typescript"
    }
]
</script>

<template>
    <div class="flex flex-col items-center gap-10 px-4">
        <h2 class="text-neutral-50 text-2xl md:text-3xl font-bold text-center">
            Everything you need to get started
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(feature, index) in features" :key="index"
                class="bg-neutral-800 rounded space-y-4 p-8">
                <div class="bg-sky-600 w-12 h-12 rounded flex items-center justify-center">
                    <Icon :icon="feature.icon" class="text-neutral-50 w-6 h-6" />
                </div>
                <h3 class="text-neutral-50 text-xl font-semibold">{{ feature.name }}</h3>
                <p class="text-neutral-50/75 text-base font-normal">{{ feature.description }}</p>
            </div>
        </div>
    </div>
</template>