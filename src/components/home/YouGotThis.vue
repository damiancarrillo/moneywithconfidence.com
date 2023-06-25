<script setup lang="ts">
import { CheckBadgeIcon } from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Be intentional.",
    colorClass: "text-orange-400",
    description:
      "Be intentional with your money and leave uncertainty behind. Uncertainty can lead to worry and anxiety. A clear-cut plan helps you live more intentionally while getting exactly what you want out of life.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Feel empowered.",
    colorClass: "text-rose-400",
    description:
      "Feel empowered to make money decisions without worries. You're worried you're doing it wrong. You're worried you don't know enough. Let's kick worries aside and put on a coat of empowerment.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Be brave.",
    colorClass: "text-purple-400",
    description:
      "Be brave enough to have money discussions that grow your wealth. Be confident enough to think about money without feeling guilt, shame, or anxiety. Feel confident to say yes to your desires because you planned for it.",
    icon: CheckBadgeIcon,
  },
];
</script>

<style scoped></style>

<template>
  <div class="overflow-hidden pb-8 bg-white">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start"
      >
        <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <p
              class="mt-2 text-4xl font-header font-bold tracking-tight text-black sm:text-4xl"
            >
              You got this!
            </p>
            <p class="mt-6 text-lg leading-8 text-black">
              When you think about your relationship with money, what emotions
              arise? After we work together,
              <span class="highlighted">you will</span>...
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <component
                    :is="feature.icon"
                    :class="feature.colorClass"
                    class="absolute left-1 top-1 h-5 w-5"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="overflow-hidden sm:mx-0 sm:max-w-2xl sm:rounded-3xl p-0 m-0"
        >
          <img
            src="/natasha-you-got-this.jpg"
            alt="Natasha letting you know that you got this"
            class="-mb-12 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlighted {
  position: relative;
  z-index: 1;
}
.highlighted::after {
  content: "";
  position: absolute;

  background-color: #fbcfe8;
  height: 0.4em;
  bottom: 0.1em;
  left: -0.1em;
  right: -0.1em;

  z-index: -1;
}
</style>
