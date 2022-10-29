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
        mt-10
        flex-wrap
      "
    >
      <div>
        <h2 class="text-center">
          {{ [...tasks.filter((t) => !t.isCompleted)].length }} Pending Tasks ◻️
        </h2>
        <TaskList
          :tasks="[...tasks.filter((t) => !t.isCompleted)]"
          @deleteTask="deleteTask"
          @toggleTaskCompleted="toggleTaskCompleted"
          @editTask="editTask"
        />
      </div>

      <div class="md:mt-0 mt-10">
        <h2 class="flex justify-center text-center">
          {{ [...tasks.filter((t) => t.isCompleted)].length }} Completed Tasks
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
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </h2>
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
</script>

<style scoped></style>
