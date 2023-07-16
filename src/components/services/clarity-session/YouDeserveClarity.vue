<template>
  <div class="bg-white">
    <div class="">
      <div class="mx-auto max-w-2xl pb-10">
        <h2 class="text-3xl font-bol font-header text-gray-900 sm:text-4xl">
          You deserve clarity
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          I have talked with numerous women and men about their finances.
          Everyone&rsquo;s story is different but they often see a lot of
          similarities with one of the following archetypes:
        </p>
      </div>
      <Archetypes></Archetypes>
      <div class="mx-auto max-w-2xl mt-16 mb-20">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Signature from "../../Signature.vue";
import Archetypes from "../../services/clarity-session/Archetypes.vue";
</script>
