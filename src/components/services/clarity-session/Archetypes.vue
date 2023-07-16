<template>
  <div class="bg-yellow-50 py-4">
    <div class="mx-auto max-w-6xl">
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
              class="text-lg font-semibold leading-8 tracking-tight text-yellow-950"
            >
              {{ person.name }}
            </h3>
            <p class="text-base leading-7 text-yellow-700">{{ person.role }}</p>
            <p class="mt-6 text-base leading-7 text-yellow-700">
              {{ person.bio }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const people = [
  {
    name: "Fearful Freddy",
    role: "Represents fear and anxiety",
    imageUrl: "/pexels-team-maestroo-4320385.webp",
    bio: "You have fear, shame, or anxiety around money. You avoid even thinking about money or even looking at their accounts.",
  },
  {
    name: "Confused Chlöe",
    role: "Represents confusion and uncertainty",
    imageUrl: "/pexels-alex-green-5700201.webp",
    bio: "You are doing ok, but you just know you could be doing better. You haven't fully figured out the missing link to effective money management.",
  },
];
</script>
