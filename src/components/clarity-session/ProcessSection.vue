<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
    <div class="mx-auto max-w-5xl">
      <div class="overflow-hidden bg-white">
        <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start"
          >
            <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-purple-500">
                  The Process
                </h2>
                <p
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  A Custom Plan for Your Money
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-900">
                  There is no one-size-fits-all approach for money. Let's make a
                  custom plan for you and yours. Your Clarity Session is about
                  three things:
                </p>
                <dl
                  class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                >
                  <div
                    v-for="feature in features"
                    :key="feature.name"
                    class="relative pl-9"
                  >
                    <dt class="inline font-semibold text-gray-900">
                      <component
                        :is="feature.icon"
                        class="absolute left-1 top-1 h-5 w-5 text-purple-500"
                        aria-hidden="true"
                      />
                      {{ feature.name }}
                    </dt>
                    {{ " " }}
                    <dd class="inline text-gray-900">
                      {{ feature.description }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              src="natasha-picnic-table.jpg"
              alt="Natasha sitting at a colorful picnic table"
              class="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Understanding",
    description:
      " your spending patterns and identifying your values and goals.",
    icon: AcademicCapIcon,
  },
  {
    name: "Crafting",
    description: " a spending plan that aligns with your goals and values.",
    icon: PencilSquareIcon,
  },
  {
    name: "Implementating",
    description: " and sticking to the plan.",
    icon: RocketLaunchIcon,
  },
];
</script>
