<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="sticky top-0 z-10 bg-neutral-900/50 backdrop-blur-lg py-4 px-2">
        <div class="flex justify-center items-center gap-4">
            <NuxtLink to="https://tailwindcss.com" target="_blank"
                class="text-neutral-50 text-base font-normal transition-opacity hover:opacity-75">
                Documentation
            </NuxtLink>
            <NuxtLink to="https://github.com/syvixor/nuxt-tailwindcss-starter" target="_blank"
                class="flex items-center gap-1.5 bg-neutral-700 text-neutral-50 rounded-full py-0.5 px-2
                transition-colors hover:bg-neutral-800">
                <Icon icon="mdi:github" class="w-5 h-5" />
                GitHub
            </NuxtLink>
        </div>
    </div>
</template>