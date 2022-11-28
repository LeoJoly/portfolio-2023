<script setup lang="ts">
import { about } from '@/content/en-US.json'
</script>

<template>
  <section class="c-about">
    <div class="c-about__container | l-container -solid-large">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="c-about__description" v-html="about.description" />
    </div>
    <div class="c-about__stack">
      <UiStackCircle />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-about {
  overflow-x: hidden;
  padding: 8rem 0;
  @include mq($from: tablet) {
    padding: 10rem 0;
  }
  @include mq($from: desktop) {
    padding: 13rem 0;
  }

  &__container {
    margin-bottom: 8rem;
    @include mq($from: tablet) {
      margin-bottom: 10rem;
    }
    @include mq($from: desktop) {
      margin-bottom: 13rem;
    }
  }

  &__description {
    font-size: 2.5rem;
    line-height: 3.5rem;
    @include mq($from: tablet) {
      font-size: 3rem;
      line-height: 4.5rem;
    }
    @include mq($from: desktop) {
      font-size: 4rem;
      line-height: 6rem;
    }
  }

  &__stack {
    @include flex();
    padding: 13rem 0;
  }
}
</style>
