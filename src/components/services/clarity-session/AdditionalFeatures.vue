<template>
  <div class="max-w-2xl mx-auto py-20">
    <h2 class="text-3xl font-bol font-header text-gray-900 sm:text-4xl pb-12">
      Here&rsquo;s a sneak peak of what else is included
    </h2>
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
  BanknotesIcon,
  CheckBadgeIcon,
  UsersIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/vue/24/outline";

const actions = [
  {
    title: "2 Video Coaching Calls",
    description:
      "These one to two hour long calls happen within a one month time span. They will help you identify your goals, make a plan for your money that helps you reach these goals, and keep you moving towards your ideal lifestyle.",
    icon: PhoneArrowDownLeftIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Money Tracking Software",
    description:
      "For the duration of the Clarity Session Program (one month), you will have access to money tracking software to see exactly what’s going on with your money.",
    icon: BanknotesIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Email and Text Support",
    description:
      "You can reach me via video, voice message, text message, call, or email.",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Implementation and Action Steps",
    description:
      "Following each call, you will receive accountability check-ins with specific steps you can take that will propel your finances forward.",
    icon: CheckBadgeIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];
</script>
