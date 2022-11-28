<script setup lang="ts">
import { projects } from '@/content/en-US.json'
</script>

<template>
  <section class="c-projects">
    <div class="c-projects__container | l-container -solid-large">
      <UiCardProject v-for="(p, i) in projects.list" :key="'projetc-' + i" :content="p" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-projects {
  padding: 8rem 0;
  @include mq($from: tablet) {
    padding: 10rem 0;
  }
  @include mq($from: desktop) {
    padding: 13rem 0;
  }
}
</style>
