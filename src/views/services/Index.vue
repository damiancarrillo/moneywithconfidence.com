<script setup lang="ts">
import Hero from "../../components/services/index/Hero.vue";
import GetMoneyClarity from "../../components/services/index/GetMoneyClarity.vue";
import ServicesList from "../../components/services/index/ServicesList.vue";
import { useServerSeoMeta } from "@unhead/vue";
import * as Site from "../../assets/js/Site";
import { type PageAttributes } from "../../assets/js/Site";

const pageAttrs: PageAttributes = {
  title: "Services",
  description:
    "Financial education + habits to help you, your team, or friend group to feel capable and confident with money. Come and see what I have to offer!",
  image: {
    fileName: "natasha-services-open-graph.jpg",
    alt: "Natasha standing while looking friendly and approachable",
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
  <Hero></Hero>
  <hr />
  <GetMoneyClarity></GetMoneyClarity>
  <hr />
  <ServicesList></ServicesList>
</template>
