<script setup lang="ts">
import * as Navbar from "../../../src/assets/js/Navbar";
import { DisclosureButton } from "@headlessui/vue";

const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <DisclosureButton as="template">
    <a
      :href="props.href"
      :class="[
        Navbar.fullPathMatchesItemHref($route.fullPath, props.href)
          ? 'bg-orange-100 text-orange-700'
          : 'text-purple-700 hover:bg-gray-50 hover:text-gray-900',
      ]"
      :aria-current="$route.fullPath === props.href ? 'page' : undefined"
      class="block px-3 py-2 m-3 text-base font-medium rounded-md"
    >
      <slot></slot>
    </a>
  </DisclosureButton>
</template>
