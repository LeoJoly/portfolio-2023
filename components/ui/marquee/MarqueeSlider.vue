<script setup lang="ts">
interface Props {
  content: string,
  repetitions: number
}
const props = defineProps<Props>()
const iterator = computed(() => [...Array(props.repetitions).keys()])
</script>

<template>
  <div class="c-marquee">
    <div class="c-marquee__container">
      <ul class="c-marquee__content">
        <li v-for="i in iterator" :key="i" class="c-marquee__item">
          {{ content }}
        </li>
      </ul>
      <ul class="c-marquee__content" aria-hidden="true">
        <li v-for="i in iterator" :key="i" class="c-marquee__item">
          {{ content }}
        </li>
      </ul>
    </div>
    <div class="c-marquee__container">
      <ul class="c-marquee__content">
        <li v-for="i in iterator" :key="i" class="c-marquee__item">
          {{ content }}
        </li>
      </ul>
      <ul class="c-marquee__content" aria-hidden="true">
        <li v-for="i in iterator" :key="i" class="c-marquee__item">
          {{ content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$gap: 1.5rem;

.c-marquee {
  $border: solid .1rem $white;
  padding: .5rem 0;
  border-top: $border;
  border-bottom: $border;

  &__container {
    display: flex;
    overflow: hidden;
    gap: $gap;
    width: calc(100% - 2rem);
    margin: 0 auto;
    user-select: none;
    @include mq($from: tablet) {
      width: calc(100% - 4rem);
    }
    @include mq($from: desktop) {
      width: calc(100% - 6rem);
    }

    &:last-of-type {
      transform: rotate(180deg);
    }
  }

  &__content {
    @include flex($justify: space-around);
    flex-shrink: 0;
    gap: $gap;
    min-width: 100%;
    animation: scroll 80s linear infinite;
  }

  &__item {
    text-transform: uppercase;

    &:nth-of-type(even) {
      @include font-body-text-alt();
      color: $color;
    }
  }
}

@include keyframes(scroll) {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - $gap));
  }
}
</style>
