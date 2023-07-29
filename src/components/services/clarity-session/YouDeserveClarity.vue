<template>
  <div class="bg-white">
    <div class="">
      <div class="max-w-2xl px-6 pb-10 mx-auto">
        <h2 class="text-3xl text-gray-900 font-bol font-header sm:text-4xl">
          You deserve clarity
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          I have talked with a number of women and men who tend to be in one of
          two camps. Do either of these resonate with you?
        </p>
      </div>
      <Archetypes></Archetypes>
      <div class="max-w-2xl px-6 mx-auto mt-16 mb-20">
        <p class="mt-6 text-lg leading-8 text-gray-900">
          But now you&rsquo;re ready to let go of fear, doubt, and uncertainty
          and make a clear plan for your money. That&rsquo;s where I come in.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          I&rsquo;m Natasha, and I specialize in making money easy to
          understand.
          <strong class="font-semibold"
            >My superpower is helping you feel confident with money.</strong
          >
          I&rsquo;m your money mentor and I&rsquo;m ready to share knowledge,
          guidance, and ask you just the right questions you need to manage your
          money with confidence. Let&rsquo;s get started!
        </p>
        <Signature></Signature>
        <div class="text-center mt-14">
          <a
            href="https://tidycal.com/moneywithconfidence/clarity-session"
            target="_blank"
            class="px-5 py-3 text-base font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus-visible:outline-purple-700 shadow-purple-400/60 hover:shadow-purple-700/40"
            >Let&rsquo;s get started</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Signature from "../../Signature.vue";
import Archetypes from "../../services/clarity-session/Archetypes.vue";
</script>
