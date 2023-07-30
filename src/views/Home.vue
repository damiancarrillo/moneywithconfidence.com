<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import ImHereToHelp from "../components/home/ImHereToHelp.vue";
import YouMightFeel from "../components/home/YouMightFeel.vue";
import ThatsWhereIComeIn from "../components/home/ThatsWhereIComeIn.vue";
import WaysWeCanWorkTogether from "../components/home/WaysWeCanWorkTogether.vue";
import YouGotThis from "../components/home/YouGotThis.vue";
import { useServerSeoMeta } from "@unhead/vue";
import * as Site from "../assets/js/Site";
import { type PageAttributes } from "../assets/js/Site";

const pageAttrs: PageAttributes = {
  title: "Home",
  description:
    "Coaching, conversations, and workshops with Natasha Carrillo to make you confident with your money decisions…because managing money shouldn’t be that hard.",
  image: {
    fileName: "natasha-open-graph.jpg",
    alt: "Natasha wearing a yellow suit while sitting on a green couch",
  },
};

useServerSeoMeta({
  title: `${pageAttrs.title} - ${Site.title}`,
  ogTitle: `${pageAttrs.title} - ${Site.title}`,
  ogDescription: `${pageAttrs.description}`,
  ogImage: `http://${Site.domain}/${pageAttrs.image.fileName}`,
  ogImageSecureUrl: `https://${Site.domain}/${pageAttrs.image.fileName}`,
  ogImageAlt: `${pageAttrs.image.alt}`,
  ogSiteName: `${Site.name}`,
  ogLocale: "en_US",
  ogImageType: "image/jpeg",
  ogImageWidth: "600",
  ogImageHeight: "400",
});
</script>

<template>
  <HeroSection></HeroSection>
  <ImHereToHelp></ImHereToHelp>
  <YouMightFeel></YouMightFeel>
  <ThatsWhereIComeIn></ThatsWhereIComeIn>
  <WaysWeCanWorkTogether></WaysWeCanWorkTogether>
  <YouGotThis></YouGotThis>
</template>
