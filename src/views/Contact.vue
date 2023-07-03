<template>
  <div class="bg-white">
    <main>
      <div class="relative isolate">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style="
              clip-path: polygon(
                63.1% 29.5%,
                100% 17.1%,
                76.6% 3%,
                48.4% 0%,
                44.6% 4.7%,
                54.5% 25.3%,
                59.8% 49%,
                55.2% 57.8%,
                44.4% 57.2%,
                27.8% 47.9%,
                35.1% 81.5%,
                0% 97.7%,
                39.2% 100%,
                35.2% 81.4%,
                97.2% 52.8%,
                63.1% 29.5%
              );
            "
          />
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-14 lg:pt-10 xl:pt-14">
            <div
              class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none"
            >
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1
                  class="text-5xl font-bold font-header tracking-tight text-gray-900"
                >
                  Let's reimagine your money together
                </h1>
                <p
                  class="relative mt-6 text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none"
                >
                  Thank you for your interest in Money with Confidence. I look
                  forward to supporting you or your organization or team on your
                  money journey.
                </p>
                <p
                  class="relative mt-6 text-med leading-8 text-gray-900 sm:max-w-md lg:max-w-none"
                >
                  Fill out the contact form below to connect, or you can reach
                  me at
                  <a
                    href="mailto:hello@moneywithconfidence.com?subject=Let%27s%20connect%21"
                    class="hover:text-purple-500"
                    >hello@moneywithconfidence.com</a
                  >
                </p>
                <form novalidate>
                  <div class="space-y-12 pt-16">
                    <div class="border-b border-gray-900/10 pb-12">
                      <h2
                        class="text-2xl font-bold font-header leading-7 text-gray-900"
                      >
                        Contact Form
                      </h2>

                      <div
                        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
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
                        class="text-base font-semibold leading-7 text-gray-900 pb-4 mt-10"
                      >
                        What are you interested in?
                      </h2>
                      <fieldset>
                        <legend class="sr-only">
                          one-on-one-financial-coaching
                        </legend>
                        <div class="space-y-5">
                          <div class="relative flex items-start">
                            <div class="flex h-6 items-center">
                              <input
                                id="one-on-one-financial-coaching"
                                aria-describedby="one-on-one-financial-coaching-description"
                                title="One-on-one financial coaching"
                                v-model="oneOnOneFinancialCoaching"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
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
                            <div class="flex h-6 items-center">
                              <input
                                id="workshop-facilitation"
                                aria-describedby="workshop-facilitation-description"
                                title="Workshop facilitation"
                                v-model="workshopFacilitation"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
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
                            <div class="flex h-6 items-center">
                              <input
                                id="group-coaching"
                                aria-describedby="group-coaching-description"
                                title="Group coaching"
                                v-model="groupCoaching"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
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
                            <div class="flex h-6 items-center">
                              <input
                                id="podcast-guesting"
                                aria-describedby="podcast-guesting-description"
                                title="Podcast guesting"
                                v-model="podcastGuesting"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
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
                            <div class="flex h-6 items-center">
                              <input
                                id="media-request"
                                aria-describedby="media-request-description"
                                title="Media request"
                                v-model="mediaRequest"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
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
                            <div class="flex h-6 items-center">
                              <input
                                id="other-request"
                                aria-describedby="other-request-description"
                                title="Other request"
                                v-model="otherRequest"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
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
                              class="text-base font-semibold leading-7 text-gray-900 pb-1"
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
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                              >
                                <ChevronUpDownIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>
                            <transition
                              leave-active-class="transition ease-in duration-100"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
                                        class="h-5 w-5"
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
                            class="text-base font-semibold leading-7 text-gray-900 pb-1"
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

                  <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      @click="submitForm"
                      class="rounded-full bg-purple-500 px-10 py-2 text-sm font-semibold text-white shadow-purple-400/50 hover:shadow-purple-400/30 shadow-md hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div
                class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
              >
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                >
                  <div class="relative">
                    <img
                      src="/natasha-contact-3.webp"
                      alt="Natasha explaining budgeting techniques to a client"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-0"
                    />
                  </div>
                </div>
                <div
                  class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
                >
                  <div class="relative">
                    <img
                      src="/natasha-contact-1.webp"
                      alt="Natasha laughing while looking at the camera"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-0"
                    />
                  </div>
                  <div class="relative">
                    <img
                      src="/natasha-contact-4.webp"
                      alt="Natasha walking down a bridge"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-0"
                    />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img
                      src="/natasha-contact-2.webp"
                      alt="Natasha laughing"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-0"
                    />
                  </div>
                  <div class="relative">
                    <img
                      src="/natasha-contact-5.webp"
                      alt="Natasha logging into her computer"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-0"
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
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                >
                  <CheckIcon
                    class="h-6 w-6 text-green-600"
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
                  class="inline-flex w-full justify-center rounded-full bg-purple-600 hover:bg-purple-700 focus-visible:outline-purple-700 text-white shadow-purple-400/60 hover:shadow-purple-700/40 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 py-2"
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
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon
                    class="h-6 w-6 text-red-600"
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
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon
                    class="h-6 w-6 text-red-600"
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
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
