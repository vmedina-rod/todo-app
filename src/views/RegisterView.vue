<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        class="
          relative
          block
          h-16
          lg:order-last lg:col-span-5 lg:h-full
          xl:col-span-6
        "
      >
        <img
          alt="Pattern"
          src="@/assets/pattern.webp"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>

      <main
        aria-label="Main"
        class="
          flex
          items-center
          justify-center
          px-8
          py-8
          sm:px-12
          lg:col-span-7 lg:py-12 lg:px-16
          xl:col-span-6
        "
      >
        <div class="max-w-xl lg:max-w-3xl">
          <a class="block text-blue-600" href="/">
            <span class="sr-only">Home</span>
            <img
              class="h-8 w-auto"
              src="@/assets/todovue-icon.webp"
              alt="Logo"
            />
          </a>

          <h1
            class="
              flex
              mt-6
              text-2xl
              font-bold
              text-gray-900
              dark:text-white
              sm:text-3xl
              md:text-4xl
            "
          >
            Welcome to TodoVue <span class="animate-waving-hand">👋🏻</span>,
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
            You can then sign up and start using the app! Ahead! 🚀
          </p>

          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label
                for="email-address"
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-200
                "
              >
                Email
              </label>

              <input
                v-model="inputMail"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="
                  mt-1
                  w-full
                  rounded-md
                  border-gray-200
                  bg-white
                  text-sm text-gray-700
                  shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200
                "
                placeholder="Your email address"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-200
                "
              >
                Password
              </label>

              <input
                v-model="inputPassword"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="
                  mt-1
                  w-full
                  rounded-md
                  border-gray-200
                  bg-white
                  text-sm text-gray-700
                  shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200
                "
                placeholder="A strong password"
              />
            </div>

            <div v-if="inputPassword" class="col-span-6 sm:col-span-3">
              <label
                for="password-confirm"
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-200
                "
              >
                Password Confirmation
              </label>

              <input
                v-model="confirmPassword"
                id="password-confirm"
                name="password-confirm"
                type="password"
                autocomplete="current-password-confirm"
                required=""
                class="
                  mt-1
                  w-full
                  rounded-md
                  border-gray-200
                  bg-white
                  text-sm text-gray-700
                  shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200
                "
                placeholder="Repeat the password here"
                :class="errorInput"
              />
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="
                    h-5
                    w-5
                    rounded-md
                    border-gray-200
                    bg-white
                    shadow-sm
                    dark:border-gray-700 dark:bg-gray-800
                  "
                />

                <span class="text-sm text-gray-700 dark:text-gray-200">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline dark:text-gray-200">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline dark:text-gray-200">
                  privacy policy </a
                >.
              </p>
            </div>

            <div class="error-message text-red-500 text-sm">
              {{ errorMessage }}
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                @click.prevent="submit"
                type="submit"
                class="
                  inline-block
                  shrink-0
                  rounded-md
                  border border-green-500
                  bg-green-500
                  px-12
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-transparent hover:text-green-600
                  focus:outline-none focus:ring
                  active:text-blue-500
                  dark:hover:bg-blue-700 dark:hover:text-white
                "
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                Already have an account?
                <router-link to="/auth">
                  <a href="#" class="text-gray-700 underline dark:text-gray-200"
                    >Log in</a
                  >.
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
    <ModalVerticalVue
      v-if="showModal"
      :header="header"
      :body="body"
      :buttonMessage="buttonMessage"
      @close="onModalClose"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import router from "../router/index";
import ModalVerticalVue from "../components/ModalVertical.vue";

import { useUserStore } from "../stores/user";
const userStore = useUserStore();

const header = " 👉 Check your inbox!! ✉️";
const body = "You only have to confirm your email address and that's it";
const buttonMessage = "OK";

const inputMail = ref("");
const inputPassword = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");
let showModal = ref(false);

const passwordsMatch = computed(() => {
  return inputPassword.value === confirmPassword.value;
});

const errorInput = computed(() => {
  return !passwordsMatch.value
    ? "focus:ring-red-500 focus:border-red-500 border-red-500 "
    : "focus:ring-indigo-500 focus:border-indigo-500  ";
});

const submit = async () => {
  try {
    const form = document.querySelector("form");
    if (form.checkValidity() && passwordsMatch.value) {
      await userStore.signUp(inputMail.value, inputPassword.value);
      showModal.value = true;
    } else {
      form.reportValidity();
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const onModalClose = () => {
  showModal.value = false;
  router.go("/auth");
};
</script>

<style scoped></style>
