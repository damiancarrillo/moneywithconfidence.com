<script setup lang="ts">
import HeroSection from "../../components/services/workshops-and-speaking/HeroSection.vue";
import Statistics from "../../components/services/workshops-and-speaking/Statistics.vue";
import WhoCanIHelp from "../../components/services/workshops-and-speaking/WhoCanIHelp.vue";
import FinancialTopics from "../../components/services/workshops-and-speaking/FinancialTopics.vue";
import NextSteps from "../../components/services/workshops-and-speaking/NextSteps.vue";
import Sources from "../../components/services/workshops-and-speaking/Sources.vue";
import { useServerSeoMeta } from "@unhead/vue";
import * as Site from "../../assets/js/Site";
import { type PageAttributes } from "../../assets/js/Site";

const pageAttrs: PageAttributes = {
  title: "Workshops and Speaking - Services",
  description:
    "Workshops, keynotes, and facilitated conversations to increase the financial well-being of all. Let's plan an event!",
  image: {
    fileName: "natasha-services-workshops-and-speaking-open-graph.jpg",
    alt: "Natasha wearing a purple suit with her chin resting on her arm",
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
  <Statistics></Statistics>
  <hr />
  <WhoCanIHelp></WhoCanIHelp>
  <hr />
  <FinancialTopics></FinancialTopics>
  <hr />
  <NextSteps></NextSteps>
  <Sources></Sources>
</template>
