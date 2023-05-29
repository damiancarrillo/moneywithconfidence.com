<script setup lang="ts"></script>

<template>
  <div
    class="mx-auto max-w-7xl lg:flex lg:px-8 pt-4 lg:pt-8 xl:pt-10 2xl:pt-10"
  >
    <div
      id="hero-container"
      class="container bg-white relative sm:mt-0 lg:mt-8 max-w-6xl lg:grid lg:grid-cols-12 lg:gap-x-8 px-6"
    >
      <div class="lg:col-span-1"></div>
      <div
        id="hero-blurb"
        class="pt-0 pb-16 md:pt-8 lg:pt-10 lg:col-span-6 xl:col-span-6 max-w-2xl mx-auto"
      >
        <h1
          class="text-6xl md:text-5xl xl:text-6xl font-bold font-header tracking-tight text-gray-900"
        >
          Make a money plan you’ll
          <span id="money-plan">LOVE</span>
        </h1>
        <p class="mt-6 text-lg text-black xl:text-xl 2xl:text-2xl">
          Coaching, conversations, and workshops to make you confident with your
          money decisions…because managing money shouldn’t be that hard.
        </p>
        <div class="mt-10 flex items-center gap-x-6 mx-0">
          <a
            href="#"
            class="bg-purple-600 hover:bg-purple-400 focus-visible:outline-purple-700 text-white shadow-lg shadow-purple-400/60 hover:shadow-purple-400/30 rounded-full px-7 py-3 text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >Start Here</a
          >
        </div>
      </div>
      <div id="hero-image" class="lg:col-span-5 flex pt-6">
        <div class="mx-auto place-content-end">
          <div class="w-72 lg:w-auto relative">
            <div class="w-1 h-1 absolute top-1/4 left-1/2 z-0">
              <div class="relative z-10">
                <div
                  class="rounded-full absolute bg-pink-100 w-32 h-32 -left-36 -top-12 xl:w-36 xl:h-36 xl:-left-44 xl:-top-14 2xl:w-40 2xl:h-40 2xl:-left-48 2xl:-top-16"
                ></div>
                <div
                  class="rounded-full absolute bg-teal-100 w-12 h-12 -left-20 -top-40 xl:w-14 xl:h-14 xl:-left-24 xl:-top-52 2xl:w-16 2xl:h-16 2xl:-left-28 2xl:-top-60"
                ></div>
                <div
                  class="rounded-full absolute bg-purple-100 w-8 h-8 -left-28 -top-32 xl:w-10 xl:h-10 xl:-left-32 xl:-top-40 2xl:w-12 2xl:h-12 2xl:-left-36 2xl:-top-44"
                ></div>
                <div
                  class="rounded-full absolute bg-yellow-100 w-40 h-40 left-2 -top-44 xl:w-48 xl:h-48 xl:left-8 xl:-top-52 2xl:w-56 2xl:h-56 2xl:left-10 2xl:-top-60"
                ></div>
                <div
                  class="rounded-full absolute bg-teal-100 w-12 h-12 left-14 top-0 xl:w-14 xl:h-14 xl:left-20 xl:top-2 2xl:w-16 2xl:h-16 2xl:left-24 2xl:top-3"
                ></div>
              </div>
            </div>
            <img
              class="z-50 relative"
              src="/natasha-hero-removebg.png"
              alt="A picture oƒ Natasha smiling"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#money-plan {
  position: relative;
  z-index: 1;
}
#money-plan::after {
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
