<template>
  <header
    v-if="!isLoggedIn"
    aria-label="Site Header"
    class="bg-white dark:bg-gray-900"
  >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <a class="block text-teal-600 dark:text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <img class="h-8 w-auto" src="@/assets/logo.webp" alt="Logo" />
          </a>
        </div>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <router-link to="/auth">
              <div class="hidden sm:flex">
                <a
                  class="
                    rounded-md
                    bg-green-500
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    shadow
                    dark:hover:bg-green-600
                  "
                  href="/"
                >
                  Login
                </a>
              </div>
            </router-link>

            <router-link to="/register">
              <div class="hidden sm:flex">
                <a
                  class="
                    rounded-md
                    bg-gray-100
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-green-500
                    dark:bg-gray-800 dark:text-white dark:hover:text-white/75
                  "
                  href="/"
                >
                  Register
                </a>
              </div>
            </router-link>
          </div>

          <div class="block md:hidden">
            <button
              class="
                rounded
                bg-gray-100
                p-2
                text-gray-600
                transition
                hover:text-gray-600/75
                dark:bg-gray-800 dark:text-white dark:hover:text-white/75
              "
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setupp>
//import { useUserStore } from "../stores/user";
//const userStore = useUserStore();
//
//import { computed } from "vue";
////function to check if user is logged in
//const isLoggedIn = computed(() => {
//  return userStore.userName;
//});
</script>

<style>
</style>
