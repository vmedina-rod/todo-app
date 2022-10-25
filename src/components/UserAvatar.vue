<template>
  <button
    type="button"
    class="group flex shrink-0 items-center rounded-lg transition"
  >
    <span class="sr-only">Menu</span>
    <img
      alt="avatar"
      src="https://api.multiavatar.com/{{userName}}.svg"
      class="h-10 w-10 rounded-full object-cover"
    />

    <p class="ml-2 hidden text-left text-xs sm:block">
      <strong class="block font-medium">{{ userName }}</strong>

      <!--       <span class="text-gray-500">{{ userName }}</span> -->
    </p>
  </button>
</template>

<script setup>
</script>

<style scoped></style>
