<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-20">
    <h2 class="font-header font-bold text-gray-900 text-2xl">
      Who can I help?
    </h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
      <li
        v-for="project in projects"
        :key="project.name"
        class="col-span-1 flex rounded-md shadow-sm"
      >
        <div
          :class="[
            project.bgColor,
            'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
          ]"
        >
          {{ project.initials }}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <p class="font-medium text-gray-900">
              {{ project.name }}
            </p>
          </div>
        </div>
      </li>
    </ul>

    <div class="mt-20 text-center">
      <a
        href="https://tidycal.com/moneywithconfidence/workshop-or-speaking-planning"
        target="_blank"
        class="bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-purple-400/60 hover:shadow-purple-700/40 shadow-lg rounded-full px-5 py-3 text-base font-semibold"
        >Let&rsquo;s do this!</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "High schoolers",
    initials: "HS",
    bgColor: "bg-pink-600",
  },
  {
    name: "Nonprofits",
    initials: "NP",
    bgColor: "bg-orange-600",
  },
  {
    name: "Corporate events",
    initials: "CE",
    bgColor: "bg-yellow-500",
  },
  {
    name: "College groups",
    initials: "CG",
    bgColor: "bg-green-500",
  },
  {
    name: "Book Clubs",
    initials: "BC",
    bgColor: "bg-sky-500",
  },
];
</script>
