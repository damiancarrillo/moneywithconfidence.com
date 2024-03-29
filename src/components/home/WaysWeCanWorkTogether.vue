<template>
  <div class="py-24 bg-white sm:py-32">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-4xl mx-auto sm:text-center">
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-header"
        >
          Three ways we can work together
        </p>
      </div>
      <p
        class="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-900 sm:text-center"
      >
        Let&rsquo;s rewrite your money story together and put you on the path to
        a lifetime of financial well-being.
      </p>
      <div class="flow-root mt-20">
        <div
          class="grid max-w-sm grid-cols-1 -mt-16 divide-y divide-gray-100 isolate gap-y-16 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"
        >
          <div
            v-for="tier in tiers"
            :key="tier.id"
            class="pt-16 lg:px-8 lg:pt-0 xl:px-14"
          >
            <h3
              :id="tier.id"
              class="text-xl font-semibold leading-7 text-gray-900 font-header"
            >
              {{ tier.name }}
            </h3>
            <div class="mt-8">
              <a
                :href="tier.href"
                :aria-describedby="tier.id"
                class="px-5 py-3 text-base font-semibold text-white rounded-full shadow-lg bg-sky-500 hover:bg-sky-400 focus-visible:outline-sky-600 shadow-sky-500/20 hover:shadow-sky-400/20"
                >Learn more about this</a
              >
            </div>
            <p class="mt-10 text-base font-semibold leading-6 text-gray-900">
              {{ tier.description }}
            </p>
            <ul
              role="list"
              class="mt-6 space-y-3 text-sm leading-6 text-gray-900"
            >
              <li
                v-for="feature in tier.features"
                :key="feature"
                class="flex gap-x-3"
              >
                <CheckCircleIcon
                  class="flex-none w-5 h-6 text-emerald-500"
                  aria-hidden="true"
                />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const tiers = [
  {
    name: "Facilitated Conversations",
    id: "offering-facilitated-conversations",
    href: "/services/money-and-mingle",
    description: "A guided discussion session for you and your friends.",
    features: [
      "Good for a group of friends",
      "Good for neighborhood crew",
      "Good for book clubs",
    ],
  },
  {
    name: "One-on-one Coaching",
    id: "offering-one-on-one-coaching",
    href: "/services/clarity-session",
    description: "Personalized guidance for you and your spouse.",
    features: [
      "Get a financial check-up and assessment",
      "Learn strategies for healthy financial habits",
      "Get help with goal-setting and vision",
      "Align on money matters with your spouse",
      "Get a tailored action plan to your scenario",
      "Get an accountability partner",
    ],
  },
  {
    name: "Workshops & Speaking",
    id: "offering-workshops-and-speaking",
    href: "/services/workshops-and-speaking",
    description:
      "Relieve your team from financial stress with one of my presentations.",
    features: [
      "Financial wellness for your employees",
      "Discussions on the impact of investing early",
      "Presentations to help maximize options",
      "Follow through with those 401k accounts",
      "Great perk for employees",
    ],
  },
];
</script>
