<template>
  <div>
    <button
      @click="showInput = !showInput"
      type="submit"
      class="
        flex
        items-center
        justify-center
        my-2
        text-white
        bg-lime-500
        hover:bg-lime-900
        focus:ring-4 focus:outline-none focus:ring-slate-300
        font-medium
        rounded-lg
        text-sm
        w-full
        md:w-full
        px-5
        py-2.5
        text-center
        dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800
      "
    >
      Add New Task
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-5 w-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
    <ModalTask
      @submit="createTask"
      @close="showInput = !showInput"
      v-if="showInput"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalTask from "./ModalTask.vue";
const showInput = ref(false);
const emit = defineEmits(["createTask"]);
const createTask = async (taskTitle, taskPriority) => {
  emit("createTask", taskTitle, taskPriority);
  showInput.value = false;
};
</script>

<style></style>