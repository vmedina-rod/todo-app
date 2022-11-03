<template>
  <header class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex items-center sm:justify-between sm:gap-4">
        <div class="relative hidden sm:block">
          <img class="h-8 w-auto" src="@/assets/logo.webp" alt="Logo" />
        </div>

        <div
          class="flex flex-1 items-center justify-between gap-8 sm:justify-end"
        >
          <div class="flex gap-4">
            <router-link
              to="/home"
              class="
                hidden
                text-gray-500
                hover:text-gray-900
                dark:text-gray-400 dark:hover:text-gray-100
              "
            >
              <a
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
                title="Home"
              >
                <span class="sr-only">Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </router-link>
            <LogoutButton @logout="logout" />
          </div>

          <UserAvatar :userName="userStore.userName" />
        </div>
      </div>

      <div class="mt-8">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, {{ userStore.userName }}
        </h1>

        <p class="mt-1.5 text-sm text-gray-500">
          Here you can add your tasks and organize yourself 🚀
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import UserAvatar from "./UserAvatar.vue";
import LogoutButton from "./LogoutButton.vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

const logout = async () => {
  userStore.singOut();
  router.push({ path: "/home" });
};
</script>

<style scoped></style>
