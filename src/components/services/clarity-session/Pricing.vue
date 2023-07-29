<template>
  <div class="py-20 bg-white">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Book Your Clarity Session
        </h2>
        <p class="mt-6 leading-8 text-gray-900">
          What if I told you that by implementing my custom tailored plan this
          initial investment will more than pay for itself in three months. Now
          think about what you could do with this knowledge for the
          <strong class="font-semibold">rest of your life</strong>.
        </p>
      </div>
      <div
        class="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
      >
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900">
            Clarity Session
          </h3>
          <p class="mt-6 text-base leading-7 text-gray-900">
            The clarity session was incredibly insightful for me! There were two
            best things about the session for me - the compartmentalization you
            provided of where my expenses are going (I've never seen my finances
            broken down so clearly) and the ideas you gave me about the kid's
            schooling and retirement. You clearly have a lot of knowledge and
            are well-read in this area. - <em>Amber P.</em>
          </p>
          <div class="flex items-center mt-10 gap-x-4">
            <h4
              class="flex-none text-sm font-semibold leading-6 text-purple-600"
            >
              Featuring all of the following
            </h4>
            <div class="flex-auto h-px bg-purple-100" />
          </div>
          <ul
            role="list"
            class="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            <li
              v-for="feature in includedFeatures"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="flex-none w-5 h-6 text-purple-600"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div
            class="py-10 text-center rounded-2xl bg-purple-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="max-w-xs px-8 mx-auto">
              <p class="text-base font-semibold text-purple-600">
                A small price for a lifelong change
              </p>
              <p class="flex items-baseline justify-center mt-6 gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-gray-900"
                  >$550</span
                >
                <span
                  class="text-sm font-semibold leading-6 tracking-wide text-gray-600"
                  >USD</span
                >
              </p>
              <div class="mt-8 text-center">
                <a
                  href="https://tidycal.com/moneywithconfidence/clarity-session"
                  target="_blank"
                  class="block w-full px-5 py-3 text-base font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus-visible:outline-purple-700 shadow-purple-400/60 hover:shadow-purple-700/40"
                  >Book Now</a
                >
              </div>
              <p class="mt-6 text-xs leading-5 text-purple-600">
                There is no better time to get started than now. Secure your
                slot to start managing your money with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/20/solid";

const includedFeatures = [
  "2 video coaching calls",
  "Money tracking software",
  "Email and text support",
  "Accountability follow-ups",
];
</script>
