<template>
  <div class="bg-white">
    <div class="">
      <div class="mx-auto max-w-2xl pb-10 px-6">
        <h2 class="text-3xl font-bol font-header text-gray-900 sm:text-4xl">
          You deserve clarity
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          I have talked with a number of women and men who tend to be in one of
          two camps. Do either of these resonate with you?
        </p>
      </div>
      <Archetypes></Archetypes>
      <div class="mx-auto max-w-2xl mt-16 mb-20 px-6">
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
        <div class="mt-14 text-center">
          <a
            href="https://tidycal.com/moneywithconfidence/clarity-session"
            target="_blank"
            class="bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-purple-400/60 hover:shadow-purple-700/40 shadow-lg rounded-full px-5 py-3 text-base font-semibold"
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
