<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { MicrophoneIcon } from "@heroicons/vue/24/solid";
import Logo from "./Logo.vue";
import NavbarItem from "./navbar/NavbarItem.vue";
import NavbarMobileItem from "./navbar/NavbarMobileItem.vue";
import ExternalLink from "./navbar/ExternalLink.vue";
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
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem href="/services">Services</NavbarItem>
          <NavbarItem href="/about">About</NavbarItem>
          <NavbarItem href="/contact">Contact</NavbarItem>
          <ExternalLink href="https://blackandbrownmakegreen.com">
            <div class="flex items-center">
              Podcast
              <MicrophoneIcon
                class="block w-4 h-4 ml-1 text-purple-600 m-l"
              /></div
          ></ExternalLink>
        </div>
        <div class="flex items-center -mr-2 sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
              v-if="!open"
              class="block w-6 h-6 text-purple-700"
              aria-hidden="true"
            />
            <XMarkIcon
              v-else
              class="block w-6 h-6 text-orange-700"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3">
          <DisclosureButton :as="NavbarMobileItem" href="/"
            >Home</DisclosureButton
          >
          <DisclosureButton :as="NavbarMobileItem" href="/services"
            >Services</DisclosureButton
          >
          <DisclosureButton
            :as="NavbarMobileItem"
            href="/services/clarity-session"
            class="ml-10"
            >Clarity Session</DisclosureButton
          >
          <DisclosureButton
            :as="NavbarMobileItem"
            href="/services/workshops-and-speaking"
            class="ml-10"
            >Workshops and Speaking</DisclosureButton
          >
          <DisclosureButton
            :as="NavbarMobileItem"
            href="/services/money-and-mingle"
            class="ml-10"
            >Money and Mingle</DisclosureButton
          >
          <DisclosureButton :as="NavbarMobileItem" href="/about"
            >About</DisclosureButton
          >
          <DisclosureButton :as="NavbarMobileItem" href="/contact"
            >Contact</DisclosureButton
          >
        </div>
        <hr />
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<style scoped></style>
