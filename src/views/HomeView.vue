<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section
      class="
        bg-gray-900
        text-white
        py-8
        px-4
        md:px-8
        lg:py-16
        2xl:py-40 2xl:px-60
        mx-auto
        grid grid-cols-1
        gap-8
        lg:grid-cols-12
        relative
      "
    >
      <div class="col-span-6 xl:place-self-center mb-8 mt-8 xl:mt-0 lg:mb-0">
        <h1
          class="
            text-3xl
            md:text-4xl
            xl:text-5xl
            3xl:text-6xl
            text-center
            lg:text-left
            bg-clip-text
            text-3xl
            font-extrabold
            text-transparent
            bg-gradient-to-r
            from-green-500
            to-green-600
            font-sans
          "
        >
          Organize your work<br />
          and your life, finally.
        </h1>
        <p class="my-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          Focus, get organized, and stay calm with TodoVue. The world's #1 to-do
          list and task management app.
        </p>
        <div class="flex flex-col lg:flex-row items-center">
          <router-link to="/register">
            <button
              class="
                w-full
                lg:w-max
                px-4
                py-3
                bg-green-500
                hover:bg-green-600 hover:cursor-pointer
                text-white
                font-medium
                rounded
                lg:mr-8
                mb-4
                lg:mb-0
              "
            >
              Let's Get Started
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-span-6 relative">
        <img
          class="hidden xl:block absolute z-0 right-[9px] top-[13px]"
          src="@/assets/app_bg.svg"
          alt=""
        />
        <div class="relative aspect-[366/729] mx-auto max-w-[320px]">
          <div
            class="
              shadow-xl
              absolute
              inset-y-[calc(1/729*100%)]
              right-[calc(5/729*100%)]
              left-[calc(7/729*100%)]
              rounded-[calc(58/366*100%)/calc(58/729*100%)]
            "
          ></div>
          <div
            class="
              absolute
              top-[calc(23/729*100%)]
              left-[calc(23/366*100%)]
              grid
              h-[calc(686/729*100%)]
              w-[calc(318/366*100%)]
              transform
              grid-cols-1
              overflow-hidden
              bg-gray-900
              pt-[calc(23/318*100%)]
            "
          >
            <div class="flex flex-col">
              <!-- content here -->
              <div class="bg-slate-900 w-full h-full">
                <div class="flex items-center">
                  <img
                    class="w-8 mt-5 mx-auto text-white"
                    src="@/assets/menu.svg"
                    alt="logo"
                  />
                  <img
                    class="w-8 mt-5 mx-auto"
                    src="@/assets/todovue-icon.webp"
                    alt="logo"
                  />
                  <img
                    class="w-8 mt-5 mx-auto text-white"
                    src="@/assets/logout.svg"
                    alt="logo"
                  />
                </div>

                <div class="rounded-2xl bg-slate-50 mt-4 h-full p-4">
                  <div
                    class="
                      flex
                      justify-between
                      p-1
                      mb-4
                      border-b border-slate-300
                      px-2
                      pt-4
                      pb-4
                    "
                  >
                    <p class="text-sm font-medium text-black">Todo List</p>
                    <img class="w-5 h-5" src="@/assets/close.svg" alt="logo" />
                  </div>

                  <div
                    class="
                      border
                      bg-slate-300
                      shadow
                      rounded-md
                      p-4
                      max-w-sm
                      w-full
                      mx-auto
                      mb-4
                    "
                  >
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-4 w-4"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      border
                      bg-slate-300
                      shadow
                      rounded-md
                      p-4
                      max-w-sm
                      w-full
                      mx-auto
                      mb-4
                    "
                  >
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-4 w-4"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      border
                      bg-slate-300
                      shadow
                      rounded-md
                      p-4
                      max-w-sm
                      w-full
                      mx-auto
                      mb-4
                    "
                  >
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-4 w-4"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      border
                      bg-slate-300
                      shadow
                      rounded-md
                      p-4
                      max-w-sm
                      w-full
                      mx-auto
                      mb-4
                    "
                  >
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-4 w-4"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      border
                      bg-slate-300
                      shadow
                      rounded-md
                      p-4
                      max-w-sm
                      w-full
                      mx-auto
                      mb-4
                    "
                  >
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-4 w-4"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 366 729"
            aria-hidden="true"
            class="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              fill-gray-500
            "
          >
            <path
              fill="#F2F2F2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
            ></path>
            <rect
              x="154"
              y="29"
              width="56"
              height="5"
              rx="2.5"
              fill="#D4D4D4"
            ></rect></svg
          ><img
            alt=""
            src="@/assets/phone-frame.svg"
            width="366"
            height="729"
            decoding="async"
            class="pointer-events-none absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>

    <section
      class="
        py-8
        px-4
        md:px-8
        lg:py-16
        2xl:py-40 2xl:px-60 2xl:py-20
        mx-auto
        grid
        gap-y-4 gap-x-8
        grid-cols-11
        relative
        bg-gray-100
      "
    >
      <h2 class="text-3xl md:text-4xl font-medium text-center col-span-11">
        Delightfully simple and deceptively <br />
        powerful task management
      </h2>
      <p class="max-w-lg mx-auto text-center col-span-11 leading-relaxed mb-8">
        30 million+ people organize billions of tasks in TodoVue for their work,
        education, and personal life.
      </p>
      <div
        class="
          border border-slate-200
          rounded-lg
          lg:col-span-3
          col-span-11
          lg:col-start-2
          p-8
          text-center
          lg:text-left
          bg-white
        "
      >
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
            max-md:mx-auto
            max-sm:mx-auto
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
              d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>

        <h3 class="text-xl font-medium my-4">With you everywhere</h3>
        <small
          >Use TodoVue app, extensions and widgets on any device or
          platform.</small
        >
      </div>
      <div
        class="
          border border-slate-200
          rounded-lg
          lg:col-span-3
          col-span-11
          p-8
          text-center
          lg:text-left
          bg-white
        "
      >
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
            max-md:mx-auto
            max-sm:mx-auto
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
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>

        <h3 class="text-xl font-medium my-4">Make TodoVue yours</h3>
        <small
          >Customize your to-do list with filters, labels, priorities, and more.
        </small>
      </div>
      <div
        class="
          border border-slate-200
          rounded-lg
          lg:col-span-3
          col-span-11
          p-8
          text-center
          lg:text-left
          bg-white
        "
      >
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
            max-md:mx-auto
            max-sm:mx-auto
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
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </div>

        <h3 class="text-xl font-medium my-4">Secure Database</h3>
        <small
          >Thanks to the management with supabase forget about any
          problem</small
        >
      </div>
    </section>
  </main>
</template>
