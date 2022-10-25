<template>
  <TheHeader v-if="!isLoggedIn" />
  <HeaderLoggedUser v-if="isLoggedIn" />
  <section>
    <router-view class="app-main" />
  </section>
  <TheFooter />
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";
import HeaderLoggedUser from "./components/HeaderLoggedUser.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth" });
    } else {
      // continue to dashboard
      router.push({ path: "/dashboard" });
    }
  } catch (e) {
    console.log(e);
  }
});

const isLoggedIn = computed(() => {
  return userStore.userName;
});
</script>

<style>
html,
body {
  height: 100%; /*both html and body*/
}
body {
  margin: 0; /*reset default margin*/
}
</style>
