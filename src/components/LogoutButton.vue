<template>
  <a
    @click="logout"
    href="#"
    title="Logout"
    class="
      block
      shrink-0
      rounded-lg
      bg-white
      p-2.5
      text-gray-600
      shadow-sm
      hover:text-gray-700
    "
  >
    <span class="sr-only">Logout</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path>
    </svg>
  </a>
</template>

<script setup>
const emit = defineEmits(["logout"]);
function logout() {
  emit("logout");
}
</script>

<style></style>
