<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "./Logo.vue";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function fullPathMatchesItemHref(fullPath: string, itemHref: string): Boolean {
  if (itemHref === "/") {
    return fullPath === "/" || fullPath === "";
  }
  return fullPath.startsWith(itemHref);
}
</script>

<template>
  <Disclosure as="nav" class="z-50 bg-white" v-slot="{ open }">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center flex-shrink-0">
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
              fullPathMatchesItemHref($route.fullPath, item.href)
                ? 'bg-orange-100 hover:bg-orange-200 focus-visible:outline-orange-300 text-orange-600 shadow-sm'
                : 'text-purple-600 hover:bg-purple-100 hover:shadow-purple-50 hover:shadow-md focus-visible:outline-purple-100',
              'block rounded-full py-2 px-5 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2',
            ]"
            :aria-current="$route.fullPath === item.href ? 'page' : undefined"
            >{{ item.name }}</router-link
          >
        </div>
        <div class="flex items-center -mr-2 sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            fullPathMatchesItemHref($route.fullPath, item.href)
              ? 'bg-orange-100 text-orange-700'
              : 'text-purple-700 hover:bg-gray-50 hover:text-gray-900',
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
