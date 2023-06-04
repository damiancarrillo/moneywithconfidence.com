<script setup lang="ts">
import {
  CameraIcon,
  ChartPieIcon,
  MapPinIcon,
  VideoCameraIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Establish You Money Mindset & Values",
    description:
      "Understand your money mindset. How do you feel about money and why? Identify your values, goals, and priorities. " +
      "What is important to you in life? What do you want to do more of and what do you want to do less of? Your Clarity Session will help you tease this apart.",
    icon: MapPinIcon,
  },
  {
    name: "Take a Money Snapshot",
    description:
      "What is your monthly income? What are you spending on? What percentage is toward must-have expenses vs nice-" +
      "to-have expenses? What percentage are you saving? What is your debt situation and investment plan? You will answer these questions with your Clarity Session.",
    icon: CameraIcon,
  },
  {
    name: "Two Video Calls",
    description:
      "We will have two 60-120 minute video calls within a one month span that will help you identify your goals, make a money plan that guides you toward " +
      "those goals and into your ideal lifestyle. These calls will be the foundation of your Clarity Session, plus you will receive accountability " +
      "check-ins with specific steps you can take that will propel your finances forward.",
    icon: VideoCameraIcon,
  },
  {
    name: "Money Tracking Software & Support",
    description:
      "For the month-long duration of the session, you'll have access to money tracking software to peer into your personal finances. I will be available to support " +
      "you during business hours and we can exchange videos, voice messages, text messages, calls, or emails when you need help. Learning a new system can be intimidating " +
      "but we can work through it together!",
    icon: ChartPieIcon,
  },
];
</script>

<template>
  <div class="bg-white py-10 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p
          class="mt-2 text-3xl font-bold font-header tracking-tight text-gray-900 sm:text-5xl"
        >
          It's time to manage your money with confidence!
        </p>
        <p class="mt-6 text-2xl leading-8 text-black">
          Make a money plan you'll
          <span id="love" class="uppercase">love</span> with a
          <span class="font-bold text-pink-400">Clarity Session</span>: a
          coaching session that lays out a clear path for your money.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#love {
  position: relative;
  z-index: 1;
}
#love::after {
  content: "";
  position: absolute;

  background-color: #fbcfe8;
  height: 0.3em;
  bottom: 0.1em;
  left: -0.1em;
  right: -0.1em;

  z-index: -1;
}
</style>
