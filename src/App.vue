<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import NeedsSection from "./components/NeedsSection.vue";
import RealTalkSection from "./components/RealTalkSection.vue";
import ThreeColumnCallOut from "./components/ThreeColumnCallOut.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <!-- <HeroSection></HeroSection>
  <NeedsSection></NeedsSection>
  <RealTalkSection></RealTalkSection>
  <ThreeColumnCallOut></ThreeColumnCallOut> -->
  <Footer></Footer>
</template>

<style scoped></style>
