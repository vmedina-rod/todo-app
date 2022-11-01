<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div
          class="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg"
          role="alert"
        >
          <div class="items-center sm:flex">
            <span
              class="
                inline-flex
                h-8
                w-8
                flex-shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </span>

            <p class="mt-3 text-lg font-medium sm:mt-0 sm:ml-3">
              {{ task ? "Edit your task  📋" : "Your new pending task 📋" }}
            </p>
          </div>

          <p class="mt-4 text-gray-500">
            {{ body }}
          </p>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              v-model="taskTitle"
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Enter the task decription..."
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div class="w-full sm:w-1/2">
              <p class="mb-2 font-semibold text-gray-700">Priority</p>

              <select
                v-model="taskPriority"
                type="text"
                name=""
                class="
                  w-full
                  p-2
                  bg-white
                  border border-gray-200
                  rounded
                  shadow-sm
                  appearance-none
                "
              >
                <option disabled value="">Please select the priority</option>
                <option value="0">​🔵 Normal</option>
                <option value="1">🔴 High</option>
                <option value="2">🟡 Medium</option>
                <option value="3">🟢 Low</option>
              </select>
            </div>
          </div>

          <div class="mt-6 sm:flex">
            <button
              class="
                inline-block
                w-full
                rounded-lg
                bg-green-500
                px-5
                py-3
                text-center text-sm
                font-semibold
                text-white
                sm:w-auto
              "
              @click.prevent="submit"
            >
              {{ task ? "Save" : "Add Task" }}
            </button>

            <button
              @click.prevent="cancel"
              class="
                mt-3
                inline-block
                w-full
                rounded-lg
                bg-gray-50
                px-5
                py-3
                text-center text-sm
                font-semibold
                text-green-500
                sm:mt-0 sm:ml-3 sm:w-auto
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Task from "../interfaces/Task";
const props = defineProps({
  task: Task,
});
let taskTitle = ref(props.task ? props.task.title : "");
let taskPriority = ref(props.task ? props.task.priority : "");
const emit = defineEmits(["submit", "close"]);
const submit = () => {
  emit("submit", taskTitle.value, taskPriority.value ? taskPriority.value : 0);
  clean();
};
const cancel = () => {
  emit("close");
  clean();
};
const clean = () => {
  taskTitle.value = "";
  taskPriority.value = "";
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 35rem;
  margin: 0px auto;
  transition: all 0.3s ease;
}
</style>
