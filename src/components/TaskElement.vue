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
        shadow-xl
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
          :class="{ 'line-through': task.isCompleted }"
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
          >
          </label>
        </div>

        <span
          @click="openModal"
          class="ml-2 align-center cursor-pointer"
          title="Edit Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 opacity-75"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </span>

        <strong
          @click="deleteTask"
          class="text-xl ml-2 align-center cursor-pointer alert-del"
          title="Delete task"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 opacity-75"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </strong>
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
