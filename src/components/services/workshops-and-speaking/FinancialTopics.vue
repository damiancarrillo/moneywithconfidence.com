<template>
  <div class="max-w-2xl mx-auto py-20">
    <div class="px-6">
      <h2 class="text-3xl font-bol font-header text-gray-900 sm:text-4xl pb-12">
        Here are just a few topics I can cover
      </h2>
    </div>
    <div
      class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
    >
      <div
        v-for="(action, actionIdx) in actions"
        :key="action.title"
        :class="[
          actionIdx === 0
            ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
            : '',
          actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
          actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
          actionIdx === actions.length - 1
            ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
            : '',
          'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
        ]"
      >
        <div>
          <span
            :class="[
              action.iconBackground,
              action.iconForeground,
              'inline-flex rounded-lg p-3 ring-4 ring-white',
            ]"
          >
            <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div class="mt-8">
          <h3 class="text-base font-semibold leading-6 text-gray-900">
            {{ action.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-900">
            {{ action.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-16 text-center">
      <a
        href="https://tidycal.com/moneywithconfidence/clarity-session"
        target="_blank"
        class="bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-purple-400/60 hover:shadow-purple-700/40 shadow-lg rounded-full px-5 py-3 text-base font-semibold"
        >Let&rsquo;s get started</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CalculatorIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  KeyIcon,
  MicrophoneIcon,
} from "@heroicons/vue/24/outline";

const actions = [
  {
    title: "Roadmap to Retirement",
    description: "The Roadmap to Retirement across every decade in one's life",
    icon: CalculatorIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "3 Keys to Long-Lasting Wealth",
    description:
      "Three simple and actually achievable keys to building long-lasting wealth",
    icon: KeyIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Better than Average",
    description:
      "How to be better than average with money, using time-tested advice",
    icon: ArrowTrendingUpIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Closing the Wealth Gap",
    description:
      "Regardless of where you start, you can always improve your position",
    icon: CurrencyDollarIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Early Adulthood Milestones",
    description: "Financial success for high school and college students",
    icon: AcademicCapIcon,
    iconForeground: "text-orange-700",
    iconBackground: "bg-orange-50",
  },
  {
    title: "And more!",
    description:
      "Listen to some examples from my podcast: Black and Brown Make Green",
    icon: MicrophoneIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
];
</script>
