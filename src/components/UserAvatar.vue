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
      <strong class="block font-medium">Welcome</strong>

      <span class="text-gray-500">{{ userStore.userName }}</span>
    </p>
  </button>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
const userStore = useUserStore();
</script>

<style scoped></style>
