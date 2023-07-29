<template>
  <div class="px-6 py-20 mx-auto max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold text-gray-900 font-header">
      Who can I help?
    </h2>
    <ul
      role="list"
      class="grid grid-cols-1 gap-5 mt-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
      <li
        v-for="project in projects"
        :key="project.name"
        class="flex col-span-1 rounded-md shadow-sm"
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
          class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md"
        >
          <div class="flex-1 px-4 py-2 text-sm truncate">
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
        class="px-5 py-3 text-base font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus-visible:outline-purple-700 shadow-purple-400/60 hover:shadow-purple-700/40"
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
