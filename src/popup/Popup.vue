<script setup lang="ts">
import { sendMessage } from 'webext-bridge/background'
import { sponsorStorage } from '~/logic/sponsor'

const isSponsor = sponsorStorage.value

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}

function launchGithubAuthFlow() {
  sendMessage('gh-auth', { title: 'GH Auth' })
}
</script>

<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Your Sponsorship is {{ isSponsor }}</div>
    <SharedSubtitle />
    <div class="flex flex-col">
      <button class="btn mt-2" @click="openOptionsPage">
        Open Options
      </button>
      <a class="btn mt-2" target="_blank" href="https://access.grey.software">
        <logos-github-icon /> Sign In
      </a>
    </div>
    <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div>
  </main>
</template>
