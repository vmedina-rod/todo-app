<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <div class="p-1 text-center text-3xl">
        <img class="mx-auto" src="@/assets/todovue-icon.webp" alt="Logo" />
      </div>
      <h1 class="text-center text-2xl font-bold text-green-500 sm:text-3xl">
        Get started today
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Join millions of people who organize work and life with TodoVue.
      </p>

      <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
        <div>
          <label for="email" class="text-sm font-medium">Email</label>

          <div class="relative mt-1">
            <input
              v-model="email"
              type="email"
              id="email"
              class="
                w-full
                rounded-lg
                border-gray-200
                p-4
                pr-12
                text-sm
                shadow-sm
              "
              placeholder="Enter email"
            />

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium">Password</label>

          <div class="relative mt-1">
            <input
              v-model="password"
              :type="passwordFieldType"
              id="password"
              autocomplete="current-password"
              class="
                w-full
                rounded-lg
                border-gray-200
                p-4
                pr-12
                text-sm
                shadow-sm
              "
              placeholder="Enter password"
            />

            <span
              @click="hidePassword = !hidePassword"
              class="
                absolute
                inset-y-0
                right-4
                inline-flex
                items-center
                cursor-pointer
              "
            >
              <div v-html="passwordFieldIconSvg"></div>
            </span>
          </div>
        </div>

        <div class="error-message text-red-500 text-sm">
          {{ errorMessage }}
        </div>

        <button
          @click.prevent="singIn"
          type="submit"
          class="
            block
            w-full
            rounded-lg
            bg-green-500
            hover:bg-green-600
            px-5
            py-3
            text-sm
            font-medium
            text-white
          "
        >
          Sign in
        </button>

        <p class="mt-2 text-center text-sm text-gray-500">
          You don't have an account?
          <router-link to="/register">
            <a
              class="underline font-medium text-green-500 hover:text-green-600"
            >
              Register
            </a>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "../stores/user";
import router from "../router/index";

const userStore = useUserStore();
let email = ref("");
let password = ref("");
let errorMessage = ref("");
const hidePassword = ref(true);

const singIn = async () => {
  try {
    await userStore.singIn(email.value, password.value);
    router.go("/");
  } catch (error) {
    console.log(error);
    errorMessage.value = error.message;

    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};

const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const passwordFieldIconSvg = computed(() =>
  hidePassword.value
    ? `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 text-gray-400"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>
`
);
</script>
