<template>
  <article class="prose mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
    <div class="mx-auto max-w-3xl space-y-4">
      <slot></slot>
      <h2>Contact</h2>
      <p>
        Email:
        <a href="mailto:info@moneywithconfidence.com"
          >info@moneywithconfidence.com</a
        >
      </p>
    </div>
  </article>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-header;
  @apply pt-6;
}
</style>
