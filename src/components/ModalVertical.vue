<template>
  <div class="modal-mask" v-if="body && buttonMessage">
    <div data-test-modal class="modal-wrapper">
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
                bg-blue-400
                text-white
              "
            >
              <svg
                class="h-3 w-3"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fill-rule="evenodd"
                />
              </svg>
            </span>

            <p class="mt-3 text-lg font-medium sm:mt-0 sm:ml-3">
              {{ header }}
            </p>
          </div>

          <p class="mt-4 text-gray-500">
            {{ body }}
          </p>

          <div class="mt-6 sm:flex">
            <button
              class="
                inline-block
                w-full
                rounded-lg
                bg-blue-500
                px-5
                py-3
                text-center text-sm
                font-semibold
                text-white
                sm:w-auto
              "
              @click="onClick"
            >
              {{ buttonMessage }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    body: String,
    footer: String,
    buttonMessage: { type: String, default: "OK" },
    showModal: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("close");
    },
  },
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
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
