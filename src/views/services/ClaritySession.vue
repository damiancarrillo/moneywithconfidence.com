<script setup lang="ts">
import HeroSection from "../../components/services/clarity-session/HeroSection.vue";
import YouDeserveClarity from "../../components/services/clarity-session/YouDeserveClarity.vue";
import Testimonials from "../../components/services/clarity-session/Testimonials.vue";
import CrushingIt from "../../components/services/clarity-session/CrushingIt.vue";
import Process from "../../components/services/clarity-session/Process.vue";
import AdditionalFeatures from "../../components/services/clarity-session/AdditionalFeatures.vue";
import Pricing from "../../components/services/clarity-session/Pricing.vue";
import { useServerSeoMeta } from "@unhead/vue";
import * as Site from "../../assets/js/Site";
import { type PageAttributes } from "../../assets/js/Site";

const pageAttrs: PageAttributes = {
  title: "Clarity Session - Services",
  description:
    "Make an intentional plan for your money that you will love with a Clarity Session: a one-on-one coaching session that lays out a clear path for your money.. Let's get started!",
  image: {
    fileName: "natasha-clarity-open-graph.jpg",
    alt: "Natasha wearing a yellow suit while sitting on bench and talking on the phone",
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
  <YouDeserveClarity></YouDeserveClarity>
  <Testimonials></Testimonials>
  <CrushingIt></CrushingIt>
  <Process></Process>
  <AdditionalFeatures></AdditionalFeatures>
  <hr />
  <Pricing></Pricing>
</template>
