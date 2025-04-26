<script lang="ts" setup>
</script>

<template>
    <Head>
        <Title>Nuxt + Tailwindcss v4 - Starter Template</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-4 h-screen">
        <h1 class="text-neutral-900 text-3xl font-bold">Nuxt + Tailwindcss v4</h1>
        <div class="flex items-center gap-2">
            <NuxtLink to="https://tailwindcss.com" target="_blank" class="bg-sky-200 text-sky-600 
            ring-sky-300 ring-1 rounded-md transition-colors py-1 px-4 hover:bg-sky-300">
                Documentation
            </NuxtLink>
            <NuxtLink to="https://github.com/syvixor/nuxt-tailwindcss-starter" target="_blank" class="bg-neutral-200
             text-neutral-600 ring-neutral-300 ring-1 rounded-md transition-colors py-1 px-4 
             hover:bg-neutral-300">Github Repo</NuxtLink>
        </div>
    </div>
</template>