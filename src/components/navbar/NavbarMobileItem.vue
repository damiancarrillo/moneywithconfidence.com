<script setup lang="ts">
import * as Navbar from "../../../src/assets/js/Navbar";

const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <router-link
    as="to"
    :to="props.href"
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
  </router-link>
</template>
