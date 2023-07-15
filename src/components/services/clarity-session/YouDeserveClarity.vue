<template>
  <div class="bg-white">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bol font-header text-gray-900 sm:text-4xl">
          You deserve clarity
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          I have talked with a number of women and men who tend to fall into one
          of two camps:
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto my-12 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
      >
        <li
          v-for="person in people"
          :key="person.name"
          class="flex flex-col gap-6 xl:flex-row"
        >
          <img
            class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover shadow-xl"
            :src="person.imageUrl"
            alt=""
          />
          <div class="flex-auto">
            <h3
              class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
            >
              {{ person.name }}
            </h3>
            <p class="mt-6 text-base leading-7 text-gray-600">
              {{ person.bio }}
            </p>
          </div>
        </li>
      </ul>
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

const people = [
  {
    name: "Fear and Anxiety",
    imageUrl: "/pexels-team-maestroo-4320385.webp",
    bio: "You have fear, shame, or anxiety around money. You avoid even thinking about money or looking at your accounts.",
  },
  {
    name: "Confusion and Uncertainty",
    imageUrl: "/pexels-alex-green-5700201.webp",
    bio: "You are doing ok, but you know you could be doing better; You haven't fully figured out the missing parts.",
  },
];
</script>
