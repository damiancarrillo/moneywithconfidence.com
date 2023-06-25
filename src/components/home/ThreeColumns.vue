<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-500">
          It's time to change your money story
        </h2>
        <p
          class="mt-2 text-4xl font-bold font-header tracking-tight text-gray-900 sm:text-4xl"
        >
          When it comes to money, you might feel:
        </p>
      </div>
      <div class="mx-auto mt-16 sm:mt-8 lg:mt-12 max-w-2xl lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt
              class="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900"
            >
              <component
                :is="feature.icon"
                class="h-5 w-5 flex-none"
                :class="feature.color"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-900"
            >
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
      <p class="max-w-lg font-header text-2xl mx-auto text-center pt-14">
        But one thing is certain. You’re ready to take the reins and truly
        master your money.
      </p>
      <div class="py-10 mb-10 mx-auto text-center">
        <a
          href="/services"
          class="bg-cyan-600 hover:bg-cyan-700 focus-visible:outline-cyan-700 text-white shadow-cyan-400/30 hover:shadow-cyan-700/40 shadow-lg rounded-full px-6 py-3 text-sm font-semibold"
          >I'm ready</a
        >
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  BoltIcon,
  FaceFrownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Fear, Shame, or Anxiety",
    description:
      "You have fear, shame, or anxiety around money; you avoid thinking about money or looking at your accounts.",
    href: "#",
    icon: FaceFrownIcon,
    color: "text-pink-600",
  },
  {
    name: "Uncertain or Unclear",
    description:
      "You are doing ok, but you know you could be doing better; You haven’t fully figured out the missing parts.",
    href: "#",
    icon: QuestionMarkCircleIcon,
    color: "text-purple-500",
  },
  {
    name: "Frustrated and Concerned",
    description:
      "You’re not where you think you should be, and you’re not sure how to get there.",
    href: "#",
    icon: BoltIcon,
    color: "text-yellow-500",
  },
];
</script>
