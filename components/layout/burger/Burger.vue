<script setup lang="ts">
import { nav } from '@/content/en-US.json'

const showBurger = ref(false)

const toogleBurger = () => {
  showBurger.value = !showBurger.value
}
</script>

<template>
  <div :class="['c-burger', { '-is-active': showBurger }]">
    <button class="c-burger__toggler" @click="toogleBurger">
      <span class="c-burger__line" />
      <span class="c-burger__line" />
    </button>
    <div class="c-burger__container">
      <nav>
        <ul class="c-burger__nav">
          <li v-for="item in nav" :key="item.ref" class="c-burger__link">
            {{ item.label }}
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-burger {
  $self: &;
  @include mq($from: tablet) {
    display: none;
  }

  &__line {
    display: block;
    height: .2rem;
    width: 3rem;
    background-color: $white;
    transition: $ease;

    &:first-of-type {
      margin-bottom: .8rem;
    }
  }

  &__container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    pointer-events: none;
  }

  &__nav {
    height: 100vh;
    width: 100vw;
    padding: 15rem $container-padding-mobile;
    background-color: $color;
    transform: translateY(-100%);
    transition: $ease-medium;
  }

  &__link {
    @include font-body-text-alt($font-size: 5rem, $line-height: 7rem);
    margin-bottom: 1.5rem;
  }

  &.-is-active {

    #{$self}__line:first-of-type {
      transform: translateY(.4rem) rotate(-225deg);
    }

    #{$self}__line:last-of-type {
      transform: translateY(-0.5rem) rotate(-315deg);
    }

    #{$self}__container {
      pointer-events: all;
    }

    #{$self}__nav {
      transform: translateY(0);
    }
  }
}
</style>
