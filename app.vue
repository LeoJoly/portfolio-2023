<script setup lang="ts">
import wording from '@/content/en-US.json'
</script>

<template>
  <div id="app">
    <div class="l-line -left" />
    <LayoutHeader />
    <SectionHero />
    <UiMarqueeSlider :content="wording.about.title" :repetitions="18" />
    <SectionAbout />
    <UiMarqueeSlider :content="wording.projects.title" :repetitions="13" />
    <SectionProjects />
    <div class="l-line -right" />
  </div>
</template>

<style lang="scss">
.l-line {
  position: fixed;
  top: 0;
  z-index: 300;
  width: .1rem;
  height: 100vh;
  background-color: $white;

  &.-left {
    left: 1rem;
    @include mq($from: tablet) {
      left: 2rem;
    }
    @include mq($from: desktop) {
      left: 3rem;
    }
  }

  &.-right {
    right: 1rem;
    @include mq($from: tablet) {
      right: 2rem;
    }
    @include mq($from: desktop) {
      right: 3rem;
    }
  }
}
</style>
