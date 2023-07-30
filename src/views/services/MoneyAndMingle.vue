<script setup lang="ts">
import HeroSection from "../../components/services/money-and-mingle/HeroSection.vue";
import WhatsItAllAbout from "../../components/services/money-and-mingle/WhatsItAllAbout.vue";
import Topics from "../../components/services/money-and-mingle/Topics.vue";

import { useServerSeoMeta } from "@unhead/vue";
import * as Site from "../../assets/js/Site";
import { type PageAttributes } from "../../assets/js/Site";

const pageAttrs: PageAttributes = {
  title: "Money and Mingle - Services",
  description:
    "Money and Mingle: a safe space where you could talk about money and be inspired, feel connected, and gain clarity without any icky guilt or shameful feelings. Let's get started!",
  image: {
    fileName: "natasha-money-and-mingle-open-graph.jpg",
    alt: "Natasha and her friend sitting on a couch while chatting and joking",
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
  <hr />
  <WhatsItAllAbout></WhatsItAllAbout>
  <Topics></Topics>
</template>
za
