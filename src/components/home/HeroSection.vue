<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-7xl lg:flex ">
    <div
      id="hero-container"
      class="container bg-white relative sm:mt-0 lg:mt-8 max-w-6xl lg:grid lg:grid-cols-12 lg:gap-x-8 px-6"
    >
      <div class="lg:col-span-1"></div>
      <div
        id="hero-blurb"
        class="pt-0 pb-8 md:pt-8 lg:pb-16 lg:pt-10 md:col-span-6 max-w-2xl mx-auto"
      >
        <h1
          class="text-5xl xl:text-6xl font-bold font-header tracking-tight text-gray-900 pt-6 lg:pt-8 xl:pt-10 2xl:pt-2"
        >
          Make a money plan you&rsquo;ll
          <span class="uppercase highlighted">love</span>
        </h1>
        <p class="mt-6 text-lg text-black xl:text-xl 2xl:text-2xl">
          Coaching, conversations, and workshops to make you confident with your
          money decisions…because managing money shouldn&rsquo;t be that hard.
        </p>
        <div class="mt-10 flex items-center gap-x-6 mx-0">
          <a
            href="/services"
            class="bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-lg shadow-purple-400/60 hover:shadow-purple-700/40 rounded-full px-7 py-3 text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >Start Here</a
          >
        </div>
      </div>
      <div id="hero-image" class="lg:col-span-5 flex flex-col pt-0">
        <div class="flex-grow"></div>
        <img
          class="z-50"
          src="/natasha-hero.webp"
          alt="A picture oƒ Natasha smiling"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlighted {
  position: relative;
  z-index: 1;
}
.highlighted::after {
  content: "";
  position: absolute;

  background-color: #fbcfe8;
  height: 0.4em;
  bottom: 0.4em;
  left: -0.1em;
  right: -0.1em;

  z-index: -1;
}
</style>
