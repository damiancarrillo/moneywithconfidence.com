<template>
  <article class="px-4 pt-20 mx-auto prose max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-4">
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
