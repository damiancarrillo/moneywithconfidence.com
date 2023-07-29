<template>
  <div class="bg-sky-50">
    <section
      aria-labelledby="features-heading"
      class="py-20 mx-auto max-w-7xl sm:px-2 lg:px-8"
    >
      <div class="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
        <div class="max-w-3xl">
          <h2
            id="features-heading"
            class="text-3xl font-bold tracking-tight text-gray-900 font-header sm:text-4xl"
          >
            The Process
          </h2>
          <p class="mt-6">
            The <strong class="font-semibold">Clarity Session</strong> is about
            three things:
          </p>
          <ol class="pt-6 list-decimal list-inside">
            <li class="list-item">
              Understanding your
              <strong class="font-semibold">spending patterns</strong>, and
              <strong class="font-semibold"
                >identifying your values and goals</strong
              >.
            </li>
            <li class="list-item">
              Creating a
              <strong class="font-semibold"
                >spending plan that is aligned with your values and
                goals</strong
              >.
            </li>
            <li class="list-item">
              <strong class="font-semibold">Implementing</strong> the plan.
            </li>
          </ol>
          <h3 class="mt-6 text-xl font-bold font-header">
            A Custom Plan for Your Money
          </h3>
          <p class="mt-6">
            There&rsquo;s no one-size-fits-all approach for money. Let&rsquo;s
            make a custom plan for you and yours. Here are a few more details
            about what we&rsquo;ll cover:
          </p>
        </div>

        <TabGroup as="div" class="mt-4">
          <div class="flex -mx-4 overflow-x-auto overflow-y-hidden sm:mx-0">
            <div class="flex-auto px-4 border-b border-sky-200 sm:px-0">
              <TabList class="flex -mb-px space-x-10">
                <Tab
                  as="template"
                  v-for="tab in tabs"
                  :key="tab.name"
                  v-slot="{ selected }"
                >
                  <button
                    :class="[
                      selected
                        ? 'border-sky-500 text-sky-600'
                        : 'border-transparent text-gray-900 hover:border-gray-700 hover:text-gray-800',
                      'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                    ]"
                  >
                    {{ tab.name }}
                  </button>
                </Tab>
              </TabList>
            </div>
          </div>

          <TabPanels as="template">
            <TabPanel
              v-for="tab in tabs"
              :key="tab.name"
              class="pt-10 space-y-16 lg:pt-16"
            >
              <div
                v-for="feature in tab.features"
                :key="feature.name"
                class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div class="mt-6 lg:col-span-5 lg:mt-0">
                  <h3 class="text-lg font-medium text-gray-900">
                    {{ feature.name }}
                  </h3>
                  <p class="mt-2 text-gray-900">
                    {{ feature.description }}
                  </p>
                </div>
                <div class="lg:col-span-7">
                  <div
                    class="overflow-hidden rounded-lg aspect-h-1 aspect-w-2 bg-sky-100 sm:aspect-h-2 sm:aspect-w-5"
                  >
                    <img
                      :src="feature.imageSrc"
                      :alt="feature.imageAlt"
                      class="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

const tabs = [
  {
    name: "Explore",
    features: [
      {
        name: "Explore Your Money Mindset",
        description:
          "Understand your money mindset. How do you feel about money and why?",
        imageSrc: "/pexels-nataliya-vaitkevich-7235804.webp",
        imageAlt: "Overhead image of a desk with a map and compass.",
      },
    ],
  },
  {
    name: "Identify",
    features: [
      {
        name: "Identify Your Values, Goals, & Priorities",
        description:
          "What do you value? What goals do you want to achieve? What are the priorities in your life right now?",
        imageSrc: "/pexels-this-is-zun-1194025.webp",
        imageAlt:
          "A mail and female keychain happily hanging out near each other.",
      },
    ],
  },
  {
    name: "Examine",
    features: [
      {
        name: "Examine Your Money Snapshot",
        description:
          "How does your money flow? What is your monthly and yearly income, expenses, savings, and investment rate? What is your debt situation and investment plan?",
        imageSrc: "/pexels-public-domain-pictures-60022.webp",
        imageAlt: "A close-up picture of a microscope",
      },
    ],
  },
  {
    name: "Create",
    features: [
      {
        name: "Create Your Intentional Money Plan",
        description:
          "What do you want your money to do for you? How can you plan to use your money so that it gets you more of what you value and help you achieve your biggest goals?",
        imageSrc: "/pexels-bich-tran-669986.webp",
        imageAlt: "Planner with an inscription saying 'Make it Happen'",
      },
    ],
  },
];
</script>
