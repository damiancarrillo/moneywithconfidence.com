<template>
  <div class="max-w-2xl py-20 mx-auto">
    <div class="px-6">
      <h2 class="pb-12 text-3xl text-gray-900 font-bol font-header sm:text-4xl">
        Money and Mingle is a safe space to discuss any and all topics
      </h2>
    </div>
    <div
      class="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
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
            <component :is="action.icon" class="w-6 h-6" aria-hidden="true" />
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
        href="https://tidycal.com/moneywithconfidence/money-and-mingle"
        target="_blank"
        class="px-5 py-3 text-base font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus-visible:outline-purple-700 shadow-purple-400/60 hover:shadow-purple-700/40"
        >Let&rsquo;s get started</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  LightBulbIcon,
  HomeIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";

const actions = [
  {
    title: "Money Psychology",
    description: "How does money influence your life and your decisions?",
    icon: LightBulbIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Managing Money with your Partner",
    description: "Are you and your partner perfectly aligned on money topics?",
    icon: HomeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Money and Kids",
    description:
      "Kids can throw a wrench in your long-term plans. How do you account for them as well?",
    icon: SparklesIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Money Lessons Learned",
    description:
      "I bet there are things you do that your friend group can leverage in their lives. What are those things?",
    icon: CurrencyDollarIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];
</script>
