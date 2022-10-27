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
            <a
              href="#"
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
              <span class="sr-only">Academy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </a>

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
          Your website has seen a 52% increase in traffic in the last month.
          Keep it up! 🚀
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
  console.log("logging out");
  userStore.singOut();
  router.push({ path: "/auth" });
};
</script>

<style scoped></style>
