<template>
  <div class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-purple-500">
          Services
        </h2>
        <p
          class="mt-2 text-4xl font-bold font-header tracking-tight text-gray-900 sm:text-5xl"
        >
          Pricing plans for teams of&nbsp;all&nbsp;sizes
        </p>
      </div>
      <p
        class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
      >
        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
        iusto modi velit ut non voluptas in. Explicabo id ut laborum.
      </p>
      <div
        class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
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
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">{{
                tier.price
              }}</span>
              <span
                class="text-sm font-semibold leading-6 text-gray-600"
              ></span>
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
          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular
                ? 'bg-purple-500 text-white shadow-sm hover:bg-purple-400'
                : 'text-purple-500 ring-1 ring-inset ring-purple-200 hover:ring-purple-300',
              'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500',
            ]"
            >Learn more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup type="ts">
import { CheckIcon } from "@heroicons/vue/20/solid";

const tiers = [
  {
    name: "Speaking and Workshops",
    id: "service-speaking-and-workshops",
    href: "/services/speaking-and-workshops",
    price: "$24",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Clarity Session",
    id: "service-clarity-session",
    href: "/services/clarity-session",
    price: "$32",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Identify your top three goals",
      "Review your spending for the past three months and determine alignment with your goals",
      "Create an initial action plan to achieve your top three goals",
    ],
    mostPopular: true,
  },
  {
    name: "Money and Mocktails",
    id: "service-money-and-mocktails",
    href: "/services/money-and-mocktails",
    price: "$48",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];
</script>
