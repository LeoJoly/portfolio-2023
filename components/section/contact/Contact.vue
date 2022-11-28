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
  $space: 13rem;
  padding: $space 0;

  &__title {
    @include font-body-text-alt($font-size: 8rem, $line-height: 9.7rem);
    color: $color;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  &__description {
    font-size: 4rem;
    line-height: 5.3rem;
    margin-bottom: 5rem;
  }

  &__links {
    display: flex;
    gap: 5rem;
  }
}
</style>