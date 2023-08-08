<script setup lang="ts">
import * as Navbar from "../../../src/assets/js/Navbar";

const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    :class="[
      Navbar.fullPathMatchesItemHref($route.fullPath, props.href)
        ? 'bg-orange-100 hover:sm:bg-orange-200 focus-visible:sm:outline-orange-300 text-orange-600 sm:shadow-sm'
        : 'text-purple-600 hover:sm:bg-purple-100 hover:sm:shadow-purple-50 hover:sm:shadow-md focus-visible:sm:outline-purple-100',
    ]"
    :aria-current="$route.fullPath === props.href ? 'page' : undefined"
    class="block px-5 py-2 text-base font-medium rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    <slot></slot>
  </a>
</template>
