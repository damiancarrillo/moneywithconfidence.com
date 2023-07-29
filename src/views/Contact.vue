<template>
  <div class="bg-white md:pt-14">
    <main>
      <div class="relative isolate">
        <SquareLines></SquareLines>
        <BlurredBackground></BlurredBackground>
        <div class="overflow-hidden">
          <div class="px-6 pb-32 mx-auto max-w-7xl pt-14 lg:pt-10 xl:pt-14">
            <div
              class="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none"
            >
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <IntroSection></IntroSection>
                <form novalidate>
                  <div class="pt-16 space-y-12">
                    <div class="pb-12 border-b border-gray-900/10">
                      <h2
                        class="text-2xl font-bold leading-7 text-gray-900 font-header"
                      >
                        Contact Form
                      </h2>

                      <div
                        class="grid grid-cols-1 mt-6 gap-x-6 gap-y-8 sm:grid-cols-6"
                      >
                        <div class="sm:col-span-4">
                          <label
                            for="name"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Name
                            <div class="mt-2">
                              <input
                                id="name"
                                type="text"
                                v-model="name"
                                autocomplete="name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                                required
                              />
                            </div>
                          </label>
                        </div>

                        <div class="sm:col-span-4">
                          <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Email address
                            <div class="mt-2">
                              <input
                                id="email"
                                type="email"
                                v-model="email"
                                autocomplete="email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                                required
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <h2
                        class="pb-4 mt-10 text-base font-semibold leading-7 text-gray-900"
                      >
                        What are you interested in?
                      </h2>
                      <fieldset>
                        <legend class="sr-only">
                          one-on-one-financial-coaching
                        </legend>
                        <div class="space-y-5">
                          <div class="relative flex items-start">
                            <div class="flex items-center h-6">
                              <input
                                id="one-on-one-financial-coaching"
                                aria-describedby="one-on-one-financial-coaching-description"
                                title="One-on-one financial coaching"
                                v-model="oneOnOneFinancialCoaching"
                                type="checkbox"
                                class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                              />
                            </div>
                            <div class="ml-3 text-sm leading-6">
                              <label
                                for="one-on-one-financial-coaching"
                                class="font-medium text-gray-900"
                                >One-on-one financial coaching
                                <p
                                  id="one-on-one-financial-coaching-description"
                                  class="text-gray-500"
                                >
                                  Let me help you reach your financial goals.
                                </p>
                              </label>
                            </div>
                          </div>
                          <div class="relative flex items-start">
                            <div class="flex items-center h-6">
                              <input
                                id="workshop-facilitation"
                                aria-describedby="workshop-facilitation-description"
                                title="Workshop facilitation"
                                v-model="workshopFacilitation"
                                type="checkbox"
                                class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                              />
                            </div>
                            <div class="ml-3 text-sm leading-6">
                              <label
                                for="workshop-facilitation"
                                class="font-medium text-gray-900"
                                >Workshop/facilitation
                                <p
                                  id="workshop-facilitation-description"
                                  class="text-gray-500"
                                >
                                  Let me present to your entire company or your
                                  team.
                                </p>
                              </label>
                            </div>
                          </div>
                          <div class="relative flex items-start">
                            <div class="flex items-center h-6">
                              <input
                                id="group-coaching"
                                aria-describedby="group-coaching-description"
                                title="Group coaching"
                                v-model="groupCoaching"
                                type="checkbox"
                                class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                              />
                            </div>
                            <div class="ml-3 text-sm leading-6">
                              <label
                                for="group-coaching"
                                class="font-medium text-gray-900"
                                >Group Coaching
                                <p
                                  id="group-coaching-description"
                                  class="text-gray-500"
                                >
                                  Scared to go at it alone? Bring your whole
                                  friend group!
                                </p>
                              </label>
                            </div>
                          </div>
                          <div class="relative flex items-start">
                            <div class="flex items-center h-6">
                              <input
                                id="podcast-guesting"
                                aria-describedby="podcast-guesting-description"
                                title="Podcast guesting"
                                v-model="podcastGuesting"
                                type="checkbox"
                                class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                              />
                            </div>
                            <div class="ml-3 text-sm leading-6">
                              <label
                                for="podcast-guesting"
                                class="font-medium text-gray-900"
                                >Podcast Guesting
                                <p
                                  id="podcast-guesting-description"
                                  class="text-gray-500"
                                >
                                  Let me be a guest on your podcast or you guest
                                  on
                                  <a
                                    href="https://blackandbrownmakegreen.com"
                                    target="_blank"
                                    class="hover:text-purple-500"
                                    >mine</a
                                  >.
                                </p>
                              </label>
                            </div>
                          </div>
                          <div class="relative flex items-start">
                            <div class="flex items-center h-6">
                              <input
                                id="media-request"
                                aria-describedby="media-request-description"
                                title="Media request"
                                v-model="mediaRequest"
                                type="checkbox"
                                class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                              />
                            </div>
                            <div class="ml-3 text-sm leading-6">
                              <label
                                for="media-request"
                                class="font-medium text-gray-900"
                                >Media Request
                                <p
                                  id="media-request-description"
                                  class="text-gray-500"
                                >
                                  You want me to comment on your story or a
                                  recent event.
                                </p>
                              </label>
                            </div>
                          </div>
                          <div class="relative flex items-start">
                            <div class="flex items-center h-6">
                              <input
                                id="other-request"
                                aria-describedby="other-request-description"
                                title="Other request"
                                v-model="otherRequest"
                                type="checkbox"
                                class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                              />
                            </div>
                            <div class="ml-3 text-sm leading-6">
                              <label
                                for="other-request"
                                class="font-medium text-gray-900"
                                >Other Request
                                <p
                                  id="other-request-description"
                                  class="text-gray-500"
                                >
                                  You have some other request.
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div class="mt-10">
                        <Listbox as="div" v-model="selected">
                          <ListboxLabel
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            <h2
                              class="pb-1 text-base font-semibold leading-7 text-gray-900"
                            >
                              Where did you hear about Money with Confidence?
                            </h2>
                          </ListboxLabel>
                          <div class="relative mt-2">
                            <ListboxButton
                              class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm sm:leading-6"
                            >
                              <span class="block truncate">{{
                                selected.name
                              }}</span>
                              <span
                                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                              >
                                <ChevronUpDownIcon
                                  class="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>
                            <transition
                              leave-active-class="transition duration-100 ease-in"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                              >
                                <ListboxOption
                                  as="template"
                                  v-for="location in locations"
                                  :key="location.id"
                                  :value="location"
                                  v-slot="{ active, selected }"
                                >
                                  <li
                                    :class="[
                                      active
                                        ? 'bg-purple-200 text-gray-900'
                                        : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                    ]"
                                  >
                                    <span
                                      :class="[
                                        selected ? 'font-bold' : 'font-normal',
                                        'block truncate',
                                      ]"
                                      >{{ location.name }}</span
                                    >
                                    <span
                                      v-if="selected"
                                      :class="[
                                        active
                                          ? 'text-purple-700'
                                          : 'text-purple-500',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      ]"
                                    >
                                      <CheckIcon
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </li>
                                </ListboxOption>
                              </ListboxOptions>
                            </transition>
                          </div>
                        </Listbox>
                      </div>
                      <div class="mt-10">
                        <label
                          for="comment"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          <h2
                            class="pb-1 text-base font-semibold leading-7 text-gray-900"
                          >
                            Send me your comments or questions
                          </h2>
                          <div class="mt-2">
                            <textarea
                              id="comment"
                              rows="4"
                              v-model="comment"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-end mt-6 gap-x-6">
                    <button
                      type="button"
                      @click="submitForm"
                      class="px-10 py-2 text-sm font-semibold text-white bg-purple-500 rounded-full shadow-md shadow-purple-400/50 hover:shadow-purple-400/30 hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div
                class="justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 hidden lg:contents"
              >
                <div
                  class="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                >
                  <div class="relative">
                    <img
                      src="/natasha-contact-3.webp"
                      alt="Natasha explaining budgeting techniques to a client"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="absolute inset-0 pointer-events-none rounded-xl ring-0"
                    />
                  </div>
                </div>
                <div
                  class="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36"
                >
                  <div class="relative">
                    <img
                      src="/natasha-contact-1.webp"
                      alt="Natasha laughing while looking at the camera"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="absolute inset-0 pointer-events-none rounded-xl ring-0"
                    />
                  </div>
                  <div class="relative">
                    <img
                      src="/natasha-contact-4.webp"
                      alt="Natasha walking down a bridge"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="absolute inset-0 pointer-events-none rounded-xl ring-0"
                    />
                  </div>
                </div>
                <div class="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                  <div class="relative">
                    <img
                      src="/natasha-contact-2.webp"
                      alt="Natasha laughing"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="absolute inset-0 pointer-events-none rounded-xl ring-0"
                    />
                  </div>
                  <div class="relative">
                    <img
                      src="/natasha-contact-5.webp"
                      alt="Natasha logging into her computer"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="absolute inset-0 pointer-events-none rounded-xl ring-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <TransitionRoot as="template" :show="openSuccessAlert">
    <Dialog as="div" class="relative z-10" @close="openSuccessAlert = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
                >
                  <CheckIcon
                    class="w-6 h-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                    >Contact form submitted</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-900">
                      Thank you for your interest in my services. I look forward
                      to helping you manage your money with confidence!
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex justify-center w-full py-2 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 focus-visible:outline-purple-700 shadow-purple-400/60 hover:shadow-purple-700/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  @click="openSuccessAlert = false"
                >
                  Done
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <TransitionRoot as="template" :show="openNameValidationAlert">
    <Dialog
      as="div"
      class="relative z-10"
      @close="openNameValidationAlert = false"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon
                    class="w-6 h-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                    >Invalid name</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please double check your name. It looks like you may have
                      made a mistake while entering it.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="openNameValidationAlert = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <TransitionRoot as="template" :show="openEmailValidationAlert">
    <Dialog
      as="div"
      class="relative z-10"
      @close="openEmailValidationAlert = false"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon
                    class="w-6 h-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                    >Invalid email address</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please double check your email address. It looks like you
                      may have made a mistake while entering it.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="openEmailValidationAlert = false"
                  ref="cancelButtonRef"
                >
                  Okay
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/20/solid";
import SquareLines from "../components/contact/SquareLines.vue";
import BlurredBackground from "../components/contact/BlurredBackground.vue";
import IntroSection from "../components/contact/IntroSection.vue";
import { isValidEmail, type ContactForm } from "../assets/js/ContactForm";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

let name = "";
let email = "";
let oneOnOneFinancialCoaching = false;
let workshopFacilitation = false;
let groupCoaching = false;
let podcastGuesting = false;
let mediaRequest = false;
let otherRequest = false;
let comment = "";

const locations = [
  { id: "friend-or-word-of-mouth", name: "Friend or word of mouth" },
  { id: "podcast", name: "Podcast" },
  { id: "facebook", name: "Facebook" },
  { id: "instagram", name: "Instagram" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "other-social-media", name: "Other social media" },
  { id: "other", name: "Other" },
];

const selected = ref(locations[0]);
let openSuccessAlert = ref(false);
let openNameValidationAlert = ref(false);
let openEmailValidationAlert = ref(false);

async function submitForm(event: Event) {
  if (name.length <= 3) {
    document.getElementById("name")?.focus();
    openNameValidationAlert.value = true;
    return;
  }

  if (!isValidEmail(email)) {
    document.getElementById("email")?.focus();
    openEmailValidationAlert.value = true;
    return;
  }

  let interests: string[] = [];

  if (oneOnOneFinancialCoaching) {
    interests.push("one-on-one financial coaching");
  }

  if (workshopFacilitation) {
    interests.push("workshop facilitation");
  }

  if (groupCoaching) {
    interests.push("group coaching");
  }

  if (podcastGuesting) {
    interests.push("podcast guesting");
  }

  if (mediaRequest) {
    interests.push("media request");
  }

  if (otherRequest) {
    interests.push("other request");
  }

  let contactForm: ContactForm = {
    name,
    email,
    whatAreYouInterestedIn: interests.join(", "),
    whereDidYouHearAboutMwc: selected.value.name,
    comment,
  };

  const response = await fetch("/.netlify/functions/handle-contact-form", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(contactForm),
  });

  if (response.status === 201) {
    openSuccessAlert.value = true;
  }
}
</script>
