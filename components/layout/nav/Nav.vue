<script setup lang="ts">
import { nav } from '@/content/en-US.json'
</script>

<template>
  <nav>
    <ul class="c-nav">
      <li v-for="item in nav" :key="item.ref" class="c-nav__item">
        <span class="c-nav__main">{{ item.label }}</span>
        <span class="c-nav__hover">{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.c-nav {
  $self: &;
  $height: 2.4rem;
  display: none;
  @include mq($from: tablet) {
    @include flex();
  }

  &__item {
    position: relative;
    overflow-y: hidden;
    display: block;
    text-transform: uppercase;
    text-align: center;
    margin-left: 3rem;
    cursor: pointer;

    &:first-of-type {
      margin-left: none;
    }

    &:hover {
      @include mq($from: desktop) {
        #{$self}__main {
          top: $height;
        }

        #{$self}__hover {
          bottom: 0;
        }
      }
    }
  }

  &__main {
    position: absolute;
    top: 0;
    display: block;
    transition: $ease-short;
  }

  &__hover {
    position: relative;
    bottom: $height;
    display: block;
    color: $color;
    font-style: italic;
    font-weight: 700;
    transition: $ease-short;
  }
}
</style>
