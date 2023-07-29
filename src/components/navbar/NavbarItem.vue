<script setup lang="ts">
import * as Navbar from "../../../src/assets/js/Navbar";

const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <router-link
    :to="props.href"
    :class="[
      Navbar.fullPathMatchesItemHref($route.fullPath, props.href)
        ? 'bg-orange-100 hover:bg-orange-200 focus-visible:outline-orange-300 text-orange-600 shadow-sm'
        : 'text-purple-600 hover:bg-purple-100 hover:shadow-purple-50 hover:shadow-md focus-visible:outline-purple-100',
    ]"
    :aria-current="$route.fullPath === props.href ? 'page' : undefined"
    class="block px-5 py-2 text-base font-medium rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    <slot></slot>
  </router-link>
</template>
