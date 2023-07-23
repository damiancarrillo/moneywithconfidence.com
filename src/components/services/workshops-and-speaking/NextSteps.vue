<template>
  <div class="mx-auto max-w-7xl mt-20 px-6">
    <div class="text-center">
      <h2 class="text-3xl font-bol font-header text-gray-900 sm:text-4xl">
        What are the next steps?
      </h2>
    </div>

    <div class="flow-root max-w-lg mx-auto">
      <ul role="list" class="-mb-8 mt-14">
        <li
          v-for="(activityItem, activityItemIdx) in activity"
          :key="activityItem.id"
        >
          <div class="relative pb-8">
            <span
              v-if="activityItemIdx !== activity.length - 1"
              class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-purple-100"
              aria-hidden="true"
            />
            <div class="relative flex items-start space-x-3">
              <template
                v-if="activityItem.type === 'meeting'"
                condition="activityItem.type === 'meeting'"
              >
                <div>
                  <div class="relative px-1">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white"
                    >
                      <UsersIcon
                        class="h-5 w-5 text-purple-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div class="min-w-0 flex-1 py-1.5">
                  <div class="text-sm text-gray-700">
                    {{ activityItem.comment }}
                  </div>
                </div>
              </template>
              <template v-else-if="activityItem.type === 'task'">
                <div class="relative">
                  <img
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                    :src="activityItem.imageUrl"
                    alt="A head shot of Natasha"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ activityItem.person.name }}
                    </div>
                    <div
                      class="mt-0.5 text-sm text-gray-500 gap-1 flex flex-row items-center"
                    >
                      <CheckIcon class="h-4 w-4 text-emerald-600" />
                      <p>Task</p>
                    </div>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>{{ activityItem.comment }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="mt-14 text-center">
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
import { UsersIcon } from "@heroicons/vue/20/solid";
import { CheckIcon } from "@heroicons/vue/24/outline";

const activity = [
  {
    id: 1,
    type: "meeting",
    person: { name: "Everyone" },
    imageUrl: undefined,
    comment:
      "We connect on a video call or in-person meeting to discuss your needs",
  },
  {
    id: 2,
    type: "task",
    person: { name: "You" },
    imageUrl: "/pexels-pixabay-157776.webp",
    comment: "You let me know that you want to proceed with the process",
  },
  {
    id: 3,
    type: "task",
    person: { name: "Natasha Carrillo" },
    imageUrl: "/natasha-headshot.webp",
    comment:
      "I draft and send over a custom proposal with possible details for your workshop or event",
  },
  {
    id: 4,
    type: "task",
    person: { name: "You" },
    imageUrl: "/pexels-pixabay-157776.webp",
    comment:
      "You submit any necessary changes you would like me to make to the proposal",
  },
  {
    id: 5,
    type: "task",
    person: { name: "Natasha Carrillo" },
    imageUrl: "/natasha-headshot.webp",
    comment:
      "I complete the materials so that I can lead our workshop or event",
  },
  {
    id: 6,
    type: "meeting",
    person: { name: "Everyone" },
    imageUrl: undefined,
    comment: "We elevate the financial well-being of your team",
  },
];
</script>
