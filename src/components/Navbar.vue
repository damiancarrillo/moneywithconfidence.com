<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "./Logo.vue";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];
</script>

<template>
  <Disclosure as="nav" class="bg-white z-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <a href="/" title="Home"
              ><Logo bottom-fill="fill-yellow-400" top-fill="fill-black"></Logo
            ></a>
          </div>
        </div>

        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            as="to"
            :to="item.href"
            :class="[
              $route.fullPath === item.href
                ? 'bg-purple-200 hover:bg-purple-300 focus-visible:outline-purple-300 text-gray-900 shadow-sm'
                : 'text-gray-900 hover:bg-purple-100 hover:shadow-purple-50 hover:shadow-md',
              'block rounded-full py-2 px-5 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
            ]"
            :aria-current="$route.fullPath === item.href ? 'page' : undefined"
            >{{ item.name }}</router-link
          >
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            $route.fullPath === item.href
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'block rounded-md py-2 px-3 text-base font-medium',
            'm-3',
          ]"
          :aria-current="$route.fullPath === item.href ? 'page' : undefined"
          >{{ item.name }}</a
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped></style>
