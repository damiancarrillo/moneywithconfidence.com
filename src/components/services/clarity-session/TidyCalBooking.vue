<template>
  <div class="mx-auto max-w-6xl pt-20">
    <p
      id="book-clarity-session"
      class="mt-2 text-4xl font-bold font-header text-center tracking-tight text-gray-900"
    >
      Book your session now
    </p>
    <component
      src="https://asset-tidycal.b-cdn.net//js/embed.js"
      :is="'script'"
    ></component>
    <div
      id="tidycal-embed"
      data-path="moneywithconfidence/clarity-session"
      class="text-center"
    ></div>
  </div>
</template>
