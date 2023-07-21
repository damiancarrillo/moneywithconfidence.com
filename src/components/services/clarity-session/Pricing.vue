<template>
  <div class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
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
        class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
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
          <div class="mt-10 flex items-center gap-x-4">
            <h4
              class="flex-none text-sm font-semibold leading-6 text-purple-600"
            >
              Featuring all of the following
            </h4>
            <div class="h-px flex-auto bg-purple-100" />
          </div>
          <ul
            role="list"
            class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            <li
              v-for="feature in includedFeatures"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-purple-600"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div
            class="rounded-2xl bg-purple-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-purple-600">
                A small price for a lifelong change
              </p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
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
                  class="block w-full bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-purple-400/60 hover:shadow-purple-700/40 shadow-lg rounded-full px-5 py-3 text-base font-semibold"
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

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const includedFeatures = [
  "Two coaching calls",
  "Money tracking software",
  "Email and text support",
  "Accountability follow-ups",
];
</script>
