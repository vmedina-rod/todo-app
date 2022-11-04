<template>
  <footer aria-label="Site Footer" class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div
          class="
            flex
            justify-center
            text-teal-600
            dark:text-teal-300
            sm:justify-start
          "
        >
          <img class="h-8 w-auto" src="@/assets/logo.webp" alt="Logo" />
        </div>

        <p
          class="
            mt-4
            text-center text-sm text-gray-500
            dark:text-gray-400
            lg:mt-0 lg:text-right
          "
        >
          Copyright &copy; 2022. All rights reserved.
        </p>

        <p
          class="
            mt-4
            text-center text-sm text-gray-500
            dark:text-gray-400
            lg:mt-0 lg:text-right
          "
        >
          Made with
          <span class="text-red-500">&hearts;</span> by
          <a href="https://medinarodriguez.com/" target="_blank">Vicente</a>
        </p>
        <a
          href="https://github.com/vmedina-rod/todo-app"
          target="_blank"
          class="
            text-teal-600
            dark:text-teal-300
            hover:text-teal-500
            dark:hover:text-teal-400
            ml-1
          "
        >
          <img
            src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            width="20"
            height="20"
            class="d-block"
            loading="lazy"
            decoding="async"
            alt="GitHub mark"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>