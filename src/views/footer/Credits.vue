<template>
  <div class="py-20 bg-white sm:py-24">
    <div
      class="grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3"
    >
      <div class="max-w-2xl">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 font-header sm:text-4xl"
        >
          Credits
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          This web site would not be possible without the help and hard work of
          all of these wonderful people.
        </p>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li
          v-for="person in people"
          :key="person.name"
          class="relative isolate"
        >
          <div class="flex items-center gap-x-6 group">
            <img
              class="w-16 h-16 rounded-full group-hover:shadow-lg"
              :src="person.imageUrl"
              width="72"
              height="72"
              alt=""
            />
            <div>
              <a :href="person.url" target="_blank">
                <h3 class="text-base font-semibold leading-7 tracking-tight">
                  {{ person.name }}
                </h3>
                <p
                  class="text-sm font-semibold leading-6 text-purple-500 group-hover:text-purple-700"
                >
                  {{ person.role }}
                </p>
                <span class="absolute inset-0" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <hr />
  <div class="py-20 bg-white sm:py-24">
    <div
      class="grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3"
    >
      <div class="max-w-2xl">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 font-header sm:text-4xl"
        >
          Stock Photography
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          This website would also not have been possible without the help of
          these photographers who publish stock photos.
        </p>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li
          v-for="person in stockPhotographers"
          :key="person.name"
          class="relative isolate"
        >
          <div class="flex items-center gap-x-6 group">
            <img
              class="w-16 h-16 rounded-full group-hover:shadow-lg"
              :src="person.imageUrl"
              width="72"
              height="72"
              alt=""
            />
            <div>
              <a :href="person.url" target="_blank">
                <h3 class="text-base font-semibold leading-7 tracking-tight">
                  {{ person.name }}
                </h3>
                <p
                  class="text-sm font-semibold leading-6 text-sky-500 group-hover:text-sky-700"
                >
                  {{ person.role }}
                </p>
                <span class="absolute inset-0" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const people = [
  {
    name: "Natasha Carrillo",
    role: "Financial Coach and Podcast Host",
    url: "https://moneywithconfidence.com",
    imageUrl: "/natasha-headshot.webp",
  },
  {
    name: "Damian Carrillo",
    role: "Software Engineer and Podcast Host",
    url: "https://blackandbrownmakegreen.com",
    imageUrl: "/damian-carrillo.webp",
  },
  {
    name: "Lindsay Herkert",
    role: "Photographer and Business Coach",
    url: "https://lindsayherkert.com/",
    imageUrl: "/lindsay-herkert.webp",
  },
];

const stockPhotographers = [
  {
    name: "Alex Green",
    role: "from pexels.com",
    url: "https://www.pexels.com/@alex-green/",
    imageUrl:
      "https://images.pexels.com/users/avatars/3657784/alex-green-420.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "Team Maestroo",
    role: "from pexels.com",
    url: "https://www.instagram.com/team_maestroo_/",
    imageUrl:
      "https://images.pexels.com/users/avatars/1772097/jackson-adjei-957.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "Pixabay",
    role: "from pixabay.com",
    url: "http://pixabay.com/",
    imageUrl:
      "https://images.pexels.com/users/avatars/2659/pixabay-617.png?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "ThisIsEngineering",
    role: "from pexels.com",
    url: "http://www.thisisengineering.org.uk/",
    imageUrl:
      "https://images.pexels.com/users/avatars/2149839/thisisengineering-344.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "Nataliya Vaitkevich",
    role: "from pexels.com",
    url: "https://nvoitkevich.com/",
    imageUrl:
      "https://images.pexels.com/users/avatars/2906295/nataliya-vaitkevich-469.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "Bich Tran",
    role: "from pexels.com",
    url: "https://www.pexels.com/@thngocbich/",
    imageUrl:
      "https://images.pexels.com/users/avatars/195856/bich-tran-682.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "Public Domain Pictures",
    role: "from pexels.com",
    url: "http://www.publicdomainpictures.net/",
    imageUrl:
      "https://images.pexels.com/users/avatars/3720/public-domain-pictures-999.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
  {
    name: "This is Zun",
    role: "from pexels.com",
    url: "https://instagram.com/ChuChupHinh",
    imageUrl:
      "https://images.pexels.com/users/avatars/358536/this-is-zun-837.jpeg?auto=compress&fit=crop&h=72&w=72&dpr=2",
  },
];
</script>
