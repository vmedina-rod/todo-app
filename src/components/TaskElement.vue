<template>
  <div v-if="task && task.title">
    <div
      :class="{ isCompleted: task.isCompleted }"
      class="
        min-width-task
        m-2
        cursor-pointer
        border border-gray-400
        rounded-lg
        hover:shadow-md hover:border-opacity-0
        transform
        hover:-translate-y-1
        transition-all
        duration-200
        flex flex-row
        items-center
        justify-between
      "
    >
      <div class="flex flex-row items-center justify-center p-2">
        <div
          v-on:mouseenter="toggleTooltip()"
          v-on:mouseleave="toggleTooltip()"
          :class="priorityColorClass"
        ></div>

        <p
          class="
            font-light font-mono
            text-sm text-gray-700
            hover:text-gray-900
            transition-all
            duration-200
            ml-2
          "
        >
          {{ task.title }}
        </p>
      </div>

      <div class="m-3 flex flex-row items-center">
        <div
          class="text-sm inline rounded-full px-2 flex flex-row items-center"
        >
          <input
            @click="toggleTaskCompleted"
            :checked="task.isCompleted"
            :id="'green-checkbox-' + task.id"
            type="checkbox"
            class="
              w-4
              h-4
              text-green-600
              bg-gray-100
              rounded
              border-gray-300
              focus:ring-green-500
              dark:focus:ring-green-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
          <label
            v-if="task.isCompleted"
            :for="'green-checkbox-' + task.id"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Completed</label
          >
        </div>

        <span @click="openModal" class="ml-2 align-center cursor-pointer">
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>

        <strong
          @click="deleteTask"
          class="text-xl ml-2 align-center cursor-pointer alert-del"
          >&times;</strong
        >
      </div>
    </div>
  </div>

  <div class="tooltip-box">
    <div
      :class="priorityColor().color"
      ref="tooltipRef"
      v-bind:class="{
        hidden: !tooltipShow,
        block: tooltipShow,
      }"
      class="tooltip"
    >
      <span
        :style="{ 'border-bottom-color': priorityColor().color }"
        class="triangle"
      ></span>
      {{ priorityColor().tooltip }}
    </div>
  </div>

  <ModalTask
    @submit="editTask"
    @close="showModal = !showModal"
    v-if="showModal"
    :task="task"
  />
</template>

<script setup>
import Task from "../interfaces/Task";
import ModalTask from "../components/ModalTask.vue";
import { ref, computed } from "vue";
const props = defineProps({
  task: Task,
});

const emit = defineEmits(["deleteTask", "toggleTaskCompleted", "editTask"]);

function deleteTask() {
  emit("deleteTask", props.task);
}

const toggleTaskCompleted = () => {
  props.task.isCompleted = !props.task.isCompleted;
  emit("toggleTaskCompleted", props.task);
};

let showModal = ref(false);
const openModal = () => {
  showModal.value = true;
};
const editTask = (newTaskTitle, newTaskPriority) => {
  props.task.title = newTaskTitle;
  props.task.priority = newTaskPriority;
  emit("editTask", props.task);
  showModal.value = false;
};

const thePriority = ref(props.task.priority);

const priorityColor = () => {
  if (thePriority.value === 0) {
    const info = {
      color: "bg-blue-500",
      tooltip: "Priority Normal",
    };
    return info;
  } else if (thePriority.value === 1) {
    const info = {
      color: "bg-red-500",
      tooltip: "Priority High",
    };
    return info;
  } else if (thePriority.value === 2) {
    const info = {
      color: "bg-yellow-500",
      tooltip: "Priority Medium",
    };
    return info;
  } else {
    const info = {
      color: "bg-green-500",
      tooltip: "Priority Low",
    };
    return info;
  }
};

const priorityColorClass = computed(() => {
  return "rounded-full w-3 h-3 " + priorityColor().color;
});

const tooltipShow = ref(false);
const toggleTooltip = () => {
  tooltipShow.value = !tooltipShow.value;
};
</script>

<style scoped>
.min-width-task {
  min-width: 250px;
}
.isCompleted {
  border: 1px solid #999999;
  background-color: rgba(169, 169, 169, 0.704);
}
.isCompleted > p {
  text-decoration: line-through;
  filter: grayscale(100%);
}

.tooltip {
  width: 175px;
  color: #ffffff;
  text-align: center;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  top: calc(100% + -20px);
  left: -23%;
  position: absolute;
  z-index: 99;
}
.tooltip-box {
  position: relative;
}
.triangle {
  border-width: 0 6px 6px;
  border-color: transparent;
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translate-x(-50%);
}
</style>
