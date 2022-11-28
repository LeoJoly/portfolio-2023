<script setup lang="ts">
import PlaneIcon from '@/assets/images/paperplane.svg'
interface Content {
  label: string,
  url: string
}
interface Props { content: Content }
defineProps<Props>()
</script>

<template>
  <div class="c-link">
    <a class="c-link__wrapper" :href="content.url" target="_blank" rel="noreferrer">
      <span class="c-link__main">{{ content.label }}</span>
      <span class="c-link__hover">{{ content.label }}</span>
    </a>
    <PlaneIcon v-if="content.label === 'Email'" class="c-link__icon" />
  </div>
</template>

<style lang="scss" scoped>
.c-link {
  $self: &;
  $height: 2.4rem;
  position: relative;

  &:hover {
    #{$self}__main {
      top: $height;
    }

    #{$self}__hover {
      bottom: 0;
    }

    #{$self}__icon {
      animation: fly 1s;
    }
  }

  &__wrapper {
    position: relative;
    overflow-y: hidden;
    display: block;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
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

  &__icon {
    $size: 4rem;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    height: $size;
    width: $size;

    &:deep(path) {
      fill: $white;
    }
  }
}

@include keyframes(fly) {
  0% {
    opacity: 0;
    transform: translate3d(0);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate3d(11rem, -2rem, 2rem);
  }
}
</style>