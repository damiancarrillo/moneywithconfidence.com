<template>
  <div class="px-6 py-12 pb-16 bg-white lg:px-8 md:pt-20">
    <div class="max-w-4xl mx-auto text-base leading-7 text-gray-900">
      <p class="text-base font-semibold leading-7 text-purple-600">
        I'm here for you
      </p>
      <h1
        class="mt-2 text-5xl font-bold tracking-tight text-gray-900 font-header sm:text-5xl"
      >
        Meet Natasha, your new financial coach
      </h1>
      <figure class="mt-10">
        <img
          class="object-cover shadow-xl aspect-square lg:aspect-video rounded-xl bg-gray-50"
          src="/natasha-about-yellow.webp"
          width="1728"
          height="1152"
          alt="A photo of Natasha sitting on the ground while working on the computer and looking at the camera"
        />
      </figure>
      <p class="mt-12 text-xl leading-8">
        Hey, I&rsquo;m Natasha, and I&rsquo;m here to help you feel calm,
        confident, and in control of your money. I know who you are.
        You&rsquo;re in the zone with your career - climbing the ranks, building
        your skills, and showcasing phenomenal work every time you show up. You
        want your bank account to reflect the high quality work you put out.
        You&rsquo;re ready for the dollars behind your name to match the
        superstar status you hold at your job. To that I say,
        <span class="highlighted"> I got you</span>.
      </p>
      <div class="mt-10">
        <p>
          I&rsquo;m just a small town girl from a country town called Cedar Lake
          &mdash; just ask my old neighbors and they'll <em>moo</em> in
          agreement. Still, I&rsquo;ve been able to make money moves for my
          family that allow us to live a life we love. I have been fortunate to
          help others do the same, and I&rsquo;m here to help you. My husband
          and I share our money story and the stories of others on our podcast
          <a
            class="text-purple-800 underline hover:text-purple-400"
            href="https://blackandbrownmakegreen.com"
            >Black and Brown Make Green</a
          >. It&rsquo;s our way to help you DIY your financial growth, but if
          you&rsquo;re wanting a little more support and guidance relevant to
          your specific situation, I&rsquo;m your girl. I can&rsquo;t wait to
          meet you!
        </p>
        <Signature></Signature>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Signature from "../Signature.vue";
</script>

<style scoped>
.highlighted {
  position: relative;
  z-index: 1;
}
.highlighted::after {
  content: "";
  position: absolute;

  background-color: #fbcfe8;
  height: 0.5em;
  bottom: 0em;
  left: -0.1em;
  right: -0.1em;

  z-index: -1;
}
</style>
