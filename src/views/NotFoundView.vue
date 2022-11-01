<template>
  <div class="grid h-screen place-content-center bg-white">
    <div class="text-center">
      <strong class="text-9xl font-black text-gray-200">404</strong>

      <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </h1>

      <p class="mt-4 text-gray-500">We can't find that page.</p>

      <router-link to="/">
        <a
          href="#"
          class="
            mt-6
            inline-block
            rounded
            bg-green-600
            px-5
            py-3
            text-sm
            font-medium
            text-white
            hover:bg-green-700
            focus:outline-none focus:ring
          "
        >
          Go Back Home
        </a>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>