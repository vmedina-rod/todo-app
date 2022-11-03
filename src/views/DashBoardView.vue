<template>
  <div class="flex flex-start flex-col md:flex-row">
    <aside class="left-0 top-0 lg:h-screen p-4 mt-10">
      <SideBar @create-task="createTask" @delete-all-tasks="deleteAllTasks" />
    </aside>
    <main
      class="
        flex-1
        p-3
        py-2
        flex flex-col
        md:flex-row
        justify-around
        flex-wrap
      "
    >
      <div class="flex-1 p-3">
        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-10">
          <div
            class="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border border-blue-100
              bg-blue-50
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold">
              {{ [...tasks.filter((t) => !t.isCompleted)].length }} Pending
              Tasks
            </h2>
            <p class="mt-2 text-sm text-gray-500">
              Last created {{ timeSinceLastEditRef }} ago
            </p>
          </div>
        </div>
        <TaskList
          :tasks="[...tasks.filter((t) => !t.isCompleted)]"
          @deleteTask="deleteTask"
          @toggleTaskCompleted="toggleTaskCompleted"
          @editTask="editTask"
        />
      </div>

      <div class="flex-1 p-3 md:mt-0">
        <div class="flex items-center rounded-xl bg-white p-4 shadow-lg mb-10">
          <div
            class="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border border-green-100
              bg-green-50
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-green-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold">
              {{ [...tasks.filter((t) => t.isCompleted)].length }} Completed
              Tasks
            </h2>
          </div>
        </div>
        <TaskList
          :tasks="[...tasks.filter((t) => t.isCompleted)]"
          @deleteTask="deleteTask"
          @toggleTaskCompleted="toggleTaskCompleted"
          @editTask="editTask"
        />
      </div>
    </main>
    <ModalVerticalVue
      v-if="showModal"
      :header="modalHeader"
      :body="modalBody"
      :buttonMessage="modalButtonMessage"
      @close="showModal = !showModal"
    />
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore } from "../stores/task";
import ModalVerticalVue from "../components/ModalVertical.vue";
import { storeToRefs } from "pinia";
import SideBar from "../components/SideBar.vue";
import TaskList from "../components/TaskList.vue";
import { ref, onMounted } from "vue";
import Task from "../interfaces/Task";
import generateRandomTaskId from "../utils/idUtils";

onMounted(() => {
  fethAllTasks();
});

const userStore = useUserStore();
const taskStore = useTaskStore();

const { tasks } = storeToRefs(taskStore);
let showModal = ref(false);
let modalHeader = ref(null);
let modalBody = ref(null);

const createTask = async (taskTitle, taskPriority) => {
  const { userId } = storeToRefs(userStore);
  const newTask = new Task(
    generateRandomTaskId(),
    taskTitle,
    false,
    userId.value,
    taskPriority
  );
  await taskStore.createTask(newTask);
};

const deleteAllTasks = async () => {
  const { userId } = storeToRefs(userStore);
  await taskStore.deleteAllTasks(userId.value);
};

const deleteTask = async (task) => {
  try {
    await taskStore.deleteTask(task);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred while trying to delete the task, please try again later ";
  }
};

const fethAllTasks = async () => {
  try {
    await taskStore.fetchTasks(userStore.userId);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred trying to recover your tasks, please try again later";
  }
};

const toggleTaskCompleted = async (task) => {
  try {
    await taskStore.toggleTaskCompleted(task);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred while trying to update the task, please try again later ";
  }
};

const editTask = async (task) => {
  try {
    await taskStore.editTask(task);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred while trying to update the task, please try again later ";
  }
};

const lastEditedTask = () => {
  let latest = [...tasks.value.filter((t) => t.created_at)].slice(-1)[0];
  if (latest) {
    return latest.created_at;
  }
};

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const _date = `0${d.getDate()}`.slice(-2);
  const hour = `0${d.getHours()}`.slice(-2);
  const minute = `0${d.getMinutes()}`.slice(-2);
  const second = `0${d.getSeconds()}`.slice(-2);
  return `${year}-${month}-${_date} ${hour}:${minute}:${second}`;
};

const lastEditedTaskRef = ref(lastEditedTask());

setInterval(() => {
  lastEditedTaskRef.value = formatDate(lastEditedTask());
}, 100);

const timeSinceLastEdit = () => {
  const now = new Date();
  const lastEdit = new Date(lastEditedTask());
  const seconds = Math.floor((now - lastEdit) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

const timeSinceLastEditRef = ref(timeSinceLastEdit());

setInterval(() => {
  timeSinceLastEditRef.value = timeSinceLastEdit();
}, 1000);
</script>

<style scoped></style>
