<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-7xl lg:flex">
    <div
      id="hero-container"
      class="container relative max-w-6xl px-6 bg-white sm:mt-0 lg:mt-8 lg:grid lg:grid-cols-12 lg:gap-x-8"
    >
      <div class="lg:col-span-1"></div>
      <div
        id="hero-blurb"
        class="max-w-2xl pt-0 pb-8 mx-auto md:pt-8 lg:pb-16 lg:pt-10 md:col-span-6"
      >
        <h1
          class="pt-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl font-header lg:pt-8 xl:pt-10 2xl:pt-2"
        >
          Manage Your Money with
          <span class="uppercase highlighted">Confidence</span>
        </h1>
        <p class="mt-6 text-lg text-black xl:text-xl 2xl:text-2xl">
          Coaching, conversations, and workshops to make you confident with your
          money decisions…because managing money shouldn&rsquo;t be that hard.
        </p>
        <p class="mt-6 text-base text-black xl:text-xl">
          Hi I&rsquo;m Natasha of Money with Confidence. Let's make a money plan
          you&rsquo;ll
          <span class="font-semibold">love</span>
          together.
        </p>
        <div class="flex items-center mx-0 mt-10 gap-x-6">
          <a
            href="/services"
            class="py-3 text-xl font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus-visible:outline-purple-700 shadow-purple-400/60 hover:shadow-purple-700/40 px-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >Start Here</a
          >
        </div>
      </div>
      <div id="hero-image" class="flex flex-col pt-0 lg:col-span-5">
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
