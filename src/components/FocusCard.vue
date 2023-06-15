<script setup>
const openSupport = () => { }
const showFeed = () => { }
</script>

<template>
    <div class="card-main">
        <div class="card-content">
            <div class="title-container">
                <div class="card-heading">
                    <div class="card-icon">
                        <img alt="" class="vector" src="/assets/icon.svg" />
                    </div>
                    <p class="heading">Focused Browsing is active</p>
                </div>
                <p class="card-subtitle">
                    We&#039;ve hidden this website&#039;s distracting elements so you can focus on your creative and
                    professional
                    goals.
                </p>
            </div>
            <div class="buttons-container">
                <a href="" @click="openSupport">
                    <div class="button-support">
                        <p class="support-this-project">Support this project</p>
                    </div>
                </a>
                <a href="" @click="showFeed">
                    <div class="button-show-feed">
                        <p class="show-feed">Show feed</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="shortcut-container">
            <p class="shortcut-caption">
                Or
                <strong class="shortcut-caption-emphasis-1">LeftShift &#43; RightShift</strong><strong
                    class="shortcut-caption-emphasis-2"> </strong> to show/hide feeds
            </p>
        </div>
    </div>
</template>