<template>
  <div v-if="!tasks">
    <h3 class="text-lg text-center py-10 font-semibold">
      You have no more pending tasks, 📋✔️
    </h3>
  </div>
  <div>
    <TaskElement
      v-for="task in tasks"
      v-bind:key="task.id"
      :task="task"
      @deleteTask="deleteTask"
      @toggleTaskCompleted="toggleTaskCompleted"
      @editTask="editTask"
    />
  </div>
</template>

<script setup>
import TaskElement from "./TaskElement.vue";
const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(["deleteTask", "toggleTaskCompleted", "editTask"]);

function deleteTask(task) {
  emit("deleteTask", task);
}

const toggleTaskCompleted = (task) => {
  emit("toggleTaskCompleted", task);
};

const editTask = (task) => {
  emit("editTask", task);
};
</script>

<style scoped></style>
