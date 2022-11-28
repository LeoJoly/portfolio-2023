<script setup lang="ts">
interface Content {
  cover: string,
  title: string,
  stack: string,
  url: string
}
interface Props {
  content: Content
}
const props = defineProps<Props>()

/** State */
const cover = ref()

/** Methods */
const getImage = async (image: string) => {
  const module = await import(/* @vite-ignore */ `../../../../assets/images/${ image }.png`)
  return module.default.replace(/^\/@fs/, '')
}

watchEffect(async () => (cover.value = await getImage(props.content.cover)))
</script>

<template>
  <a class="c-card" :href="content.url" target="_blank" rel="noreferrer">
    <div class="c-card__cover" :style="`background-image: url(${cover});`" />
    <div class="c-card__overlay" />
    <div class="c-card__content">
      <h3 class="c-card__title">
        {{ content.title }}
      </h3>
      <p class="c-card__stack">
        Stack: {{ content.stack }}
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.c-card {
  $self: &;
  @include flex($align: flex-end, $justify: flex-start);
  position: relative;
  height: 20rem;
  width: 100%;
  margin-bottom: 3rem;
  background-color: $grey-dark;
  @include mq($from: tablet) {
    height: 30rem;
  }
  @include mq($from: desktop) {
    height: 40rem;
    margin-bottom: 6rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &__cover {
    @include stretch();
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    @include mq($from: desktop) {
      background-attachment: fixed;
    }
  }

  &__overlay {
    @include stretch();
    opacity: .3;
    background-color: $black;
    transition: $ease;
  }

  &__content {
    position: relative;
    padding: 2rem;
    @include mq($from: desktop) {
      padding: 3rem;
    }
  }

  &__title {
    font-size: 5rem;
    font-weight: 900;
    line-height: 5rem;
    text-transform: uppercase;
    transition: $ease;
    @include mq($from: desktop) {
      opacity: .6;
      font-size: 12rem;
      line-height: 13rem;
    }
  }

  &__stack {
    @include font-body-text-alt();
    text-transform: uppercase;
    transform: translateX(.5rem);
    transition: $ease;
    @include mq($from: desktop) {
      opacity: 0;
    }
  }

  &:hover {
    @include mq($from: desktop) {
      #{$self}__overlay {
        opacity: .7;
      }

      #{$self}__title,
      #{$self}__stack {
        opacity: 1;
        transition: $ease-long;
      }
    }
  }
}
</style>
