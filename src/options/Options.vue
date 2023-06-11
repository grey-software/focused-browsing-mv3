<script setup>
import { sendMessage } from 'webext-bridge/background'

sendMessage('gh-auth', { title: 'GH Auth' })
</script>

<template>
  <header class="hero">
    <h1 class="hero-title text-left tab-pt:text-center">
      Verify Your <br>Sponsorship
    </h1>
    <div class="cta-container">
      <a id="login" href="#" @click="login"><span class="pl-2">Sign In </span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.hero {
  @apply w-full px-[18px] pt-[32px];
  @apply mob-lg:pt-[48px];
  @apply tab-pt:px-[32px] tab-pt:pt-[108px];
  @apply tab-ls:pt-[100px];
  @apply pc-sm:pt-[96px];
  @apply short:pt-[32px];
}

.hero-title {
  @apply pb-[42px] text-[42px] leading-[56px] tracking-[0.005em] font-extrabold text-black dark:text-white;
  @apply mob-lg:pb-[42px] mob-lg:text-[48px] mob-lg:leading-[66px] mob-lg:tracking-[0.01em];
  @apply tab-pt:text-[56px] tab-pt:leading-[64px];
  @apply tab-ls:text-[64px] tab-ls:leading-[78px] tab-ls:tracking-[0.02em];
  @apply pc-sm:text-[78px] pc-sm:leading-[82px];
  @apply pc-lg:text-[96px] pc-lg:leading-[100px];
  @apply short:text-[32px] short:leading-[40px] short:pb-[24px];
}
.cta-container {
  @apply grid gap-[16px] w-full m-0;
  @apply tab-pt:flex tab-pt:items-center tab-pt:justify-evenly tab-pt:max-w-[494px] tab-pt:m-auto;
  @apply short:gap-[0px] short:max-w-[408px];
}

a {
  @apply flex justify-center items-center text-center m-0 py-[14px] text-black border-solid border-black border-[1px] rounded-[8px];
  @apply dark:text-black dark:bg-white dark:border-black dark:border-[1px];
  @apply tab-pt:px-[32px];
  @apply pc-sm:px-[36px] pc-sm:py-[20px] pc-sm:rounded-[8px];
  @apply short:px-[24px] short:py-[8px];
  transition: all 0.3s ease-out;
}

span {
  @apply w-max text-[22px] leading-[34px] font-medium tracking-normal;
  @apply tab-pt:text-[24px];
  @apply pc-sm:text-[28px];
  @apply short:text-[22px];
}

a:hover {
  @apply text-white bg-gray border-black border-[1px];
  @apply dark:text-white dark:bg-gray dark:border-white;
}
</style>
