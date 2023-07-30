<script setup lang="ts">
import MeetNatasha from "../components/about/MeetNatasha.vue";
import LetsMakeThingsHappen from "../components/about/LetsMakeThingsHappen.vue";
import CantWaitToMeetYou from "../components/about/CantWaitToMeetYou.vue";
import { useServerSeoMeta } from "@unhead/vue";
import * as Site from "../assets/js/Site";
import { type PageAttributes } from "../assets/js/Site";

const pageAttrs: PageAttributes = {
  title: "About",
  description:
    "Hey, I’m Natasha, and I’m here to help you feel calm, confident, and in control of your money. Come and get to know me!",
  image: {
    fileName: "natasha-about-yellow-open-graph.jpg",
    alt: "Natasha sitting down and smiling while using the computer",
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
  <MeetNatasha></MeetNatasha>
  <hr />
  <LetsMakeThingsHappen></LetsMakeThingsHappen>
  <hr />
  <CantWaitToMeetYou></CantWaitToMeetYou>
</template>
