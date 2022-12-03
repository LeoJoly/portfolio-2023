<script setup lang="ts">
import LjLogo from '@/assets/logos/LJ-logo-plain.svg'
defineEmits(['navigate'])
</script>

<template>
  <header class="c-header">
    <div class="c-header__container | l-container">
      <LjLogo class="c-header__logo" />
      <LayoutNav @navigate="(ref) => $emit('navigate', ref)" />
      <LayoutBurger @navigate="(ref) => $emit('navigate', ref)" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 290;
  height: 7rem;
  width: 100vw;
  border-bottom: solid .1rem $white;
  backdrop-filter: blur(1.5rem);
  @include mq($from: tablet) {
    height: 9rem;
  }

  &__container {
    @include flex($justify: space-between);
    height: 100%;
  }

  &__logo {
    $size: 4rem;
    height: $size;
    width: $size;
    @include mq($from: tablet) {
      $size: 5rem;
      height: $size;
      width: $size;
    }
  }
}
</style>
