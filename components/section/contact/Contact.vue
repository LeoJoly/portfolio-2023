<script setup lang="ts">
import { contact } from '@/content/en-US.json'
</script>

<template>
  <section class="c-contact">
    <div class="c-contact__container | l-container -solid-large">
      <div class="c-contact__content">
        <h2 class="c-contact__title">
          {{ contact.subtitle }}
        </h2>
        <p class="c-contact__description">
          {{ contact.description }}
        </p>
      </div>
      <ul class="c-contact__links">
        <li v-for="(l, i) in contact.links" :key="'link-' + i" class="c-contact__element">
          <UiButtonLink :content="l" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-contact {
  @include margins();

  &__title {
    @include font-body-text-alt($font-size: 5rem, $line-height: 6rem);
    color: $color;
    text-transform: uppercase;
    margin-bottom: 2rem;
    @include mq($from: desktop) {
      @include font-body-text-alt($font-size: 8rem, $line-height: 9.7rem);
    }
  }

  &__description {
    font-size: 2.5rem;
    line-height: 3.5rem;
    margin-bottom: 5rem;
    @include mq($from: tablet) {
      font-size: 3rem;
      line-height: 4.5rem;
    }
    @include mq($from: desktop) {
      font-size: 4rem;
      line-height: 6rem;
    }
    
  }

  &__links {
    display: flex;
    gap: 5rem;
  }
}
</style>