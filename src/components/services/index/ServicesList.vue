<template>
  <div class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h1
        class="mt-2 text-3xl font-bold font-header tracking-tight text-gray-900 sm:text-4xl pb-10 text-center"
      >
        Choose from my available services
      </h1>
      <div
        class="isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="(tier, tierIdx) in tiers"
          :key="tier.id"
          :class="[
            tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
            tierIdx === 0 ? 'lg:rounded-r-none' : '',
            tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
            'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
          ]"
        >
          <div>
            <div class="flex items-center justify-between gap-x-4">
              <h3
                :id="tier.id"
                :class="[
                  tier.mostPopular ? 'text-purple-500' : 'text-gray-900',
                  'text-lg font-semibold leading-8',
                ]"
              >
                {{ tier.name }}
              </h3>
              <p
                v-if="tier.mostPopular"
                class="rounded-full bg-purple-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-purple-600"
              >
                Most popular
              </p>
            </div>
            <p class="mt-4 text-sm leading-6 text-gray-600">
              {{ tier.description }}
            </p>
            <ul
              role="list"
              class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
            >
              <li
                v-for="feature in tier.features"
                :key="feature"
                class="flex gap-x-3"
              >
                <CheckIcon
                  class="h-6 w-5 flex-none text-purple-500"
                  aria-hidden="true"
                />
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="mt-8 text-center">
            <a
              :href="tier.href"
              :aria-describedby="tier.id"
              :class="[
                tier.mostPopular
                  ? 'bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-purple-400/60 hover:shadow-purple-700/40'
                  : 'bg-purple-100 hover:bg-purple-200 focus-visible:outline-purple-200 text-purple-500 shadow-purple-100/50 hover:shadow-purple-400/20',
                'mt-8 block rounded-full py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500',
              ]"
              class="block w-full shadow-lg rounded-full px-5 py-3 text-base font-semibold"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/20/solid";

const tiers = [
  {
    name: "Money and Mocktails",
    id: "service-money-and-mocktails",
    href: "/services/money-and-mocktails",
    description:
      "A casual, yet intimate and fun, money hangout that promotes growth through conversation.",
    features: [
      "You bring your friend group",
      "I bring the mocktails",
      "Guided conversations in a safe space",
      "Good for collective self-improvement",
      "You will realize money conversations are fun",
    ],
    mostPopular: false,
  },
  {
    name: "Clarity Session",
    id: "service-clarity-session",
    href: "/services/clarity-session",
    description:
      "One-on-one education and coaching that provides you with specific guidance based on your personal situation.",
    features: [
      "Explore your money mindset",
      "Identify your values, goals, and priorities",
      "Examine your money snapshot",
      "Create your intentional money plan",
      "Money tracking software",
    ],
    mostPopular: true,
  },
  {
    name: "Workshops and Speaking",
    id: "service-workshops-and-speaking",
    href: "/services/workshops-and-speaking",
    description:
      "Tailor-made, engaging, and interactive presentations perfect for small or large groups — nonprofits, for-profits, conferences, and more.",
    features: [
      "Roadmap to Retirement across every decade",
      "3 Keys to Building Long-Lasting Wealth",
      "How to Be Better than Average with Money",
      "Financial Success for HS & College Students",
    ],
    mostPopular: false,
  },
];
</script>
