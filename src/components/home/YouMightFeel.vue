<template>
  <div class="py-16 bg-white sm:py-24">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-cyan-600">
          It's time to change your money story
        </h2>
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 font-header sm:text-4xl"
        >
          When it comes to money, you might feel:
        </p>
      </div>
      <div class="max-w-2xl mx-auto mt-16 sm:mt-8 lg:mt-12 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt
              class="flex items-center text-lg font-semibold leading-7 text-gray-900 gap-x-3"
            >
              <component
                :is="feature.icon"
                class="flex-none w-5 h-5"
                :class="feature.color"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd
              class="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-900"
            >
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
      <p class="max-w-lg mx-auto text-2xl text-center font-header pt-14">
        But one thing is certain.
        <span class="highlighted">You&rsquo;re ready</span> to take the reins
        and truly master your money.
      </p>
      <div class="py-10 mx-auto mb-10 text-center">
        <a
          href="/services"
          class="px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 focus-visible:outline-emerald-700 shadow-emerald-400/30 hover:shadow-emerald-700/40"
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
    color: "text-pink-400",
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

<style scoped>
.highlighted {
  position: relative;
  z-index: 1;
}
.highlighted::after {
  content: "";
  position: absolute;

  background-color: #fbcfe8;
  height: 0.5em;
  bottom: 0.4em;
  left: -0.1em;
  right: -0.1em;

  z-index: -1;
}
</style>
