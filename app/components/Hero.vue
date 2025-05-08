<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="flex flex-col items-center text-center gap-4 py-20 px-4">
        <h1 class="text-sky-500 text-4xl md:text-6xl font-bold">
            Build modern web apps faster than ever
        </h1>
        <p class="text-neutral-50/75 text-lg font-medium">
            A modern starter template combining <b class="underline">Nuxt</b> and
            <b class="underline">Tailwind CSS v4</b> for rapid development.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="https://tailwindcss.com" target="_blank" class="flex items-center gap-1.5 
            bg-sky-500 text-neutral-50 transition-colors rounded py-3 px-4 hover:bg-sky-600">
                <Icon icon="mynaui:rocket-solid" class="w-7 h-7" />
                Get Started
            </NuxtLink>
            <NuxtLink to="https://github.com/syvixor/nuxt-tailwindcss-starter" target="_blank" class="flex 
            items-center gap-1.5 bg-neutral-700 text-neutral-50 transition-colors rounded py-3 px-4 
            hover:bg-neutral-800">
                <Icon icon="mdi:github" class="w-7 h-7" />
                GitHub
            </NuxtLink>
        </div>
    </div>
</template>