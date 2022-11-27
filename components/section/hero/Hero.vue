<script setup lang="ts">
import BoomPicto from '@/assets/images/boom.svg'
import CometPicto from '@/assets/images/comet.svg'
import RocketPicto from '@/assets/images/rocket.svg'
import LjLogo from '@/assets/logos/LJ-logo-empty.svg'
import { hero } from '@/content/en-US.json'

const pictos = shallowRef([BoomPicto, CometPicto, RocketPicto, LjLogo])
</script>

<template>
  <section class="c-hero">
    <div class="c-hero__container | l-container">
      <div>
        <h1 class="c-hero__title">
          {{ hero.title }}
        </h1>
        <h2 class="c-hero__subtitle">
          {{ hero.subtitle }}
        </h2>
      </div>
      <Component :is="picto" v-for="picto in pictos" :key="picto" class="c-hero__picto" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-hero {

  &__container {
    @include flex();
    position: relative;
    height: calc(100vh - 7rem);
    @include mq($from: tablet) {
      height: calc(100vh - 9rem);
    }
  }

  &__title {
    color: $color;
    font-size: 8rem;
    font-weight: 900;
    line-height: 7rem;
    text-transform: uppercase;
    @include mq($from: tablet) {
      font-size: 16rem;
      line-height: 15rem;
    }
    @include mq($from: desktop) {
      font-size: 22.8rem;
      line-height: 18rem;
    }
  }

  &__subtitle {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 4rem;
    text-transform: uppercase;
    transform: translateX(.4rem);
    @include mq($from: tablet) {
      font-size: 4rem;
      line-height: 5.5rem;
      transform: translateX(.8rem);
    }
    @include mq($from: desktop) {
      font-size: 5rem;
      line-height: 7.5rem;
      transform: translateX(.8rem);
    }
  }

  &__picto {
    position: absolute;

    &:deep(path) {
      fill: $white;
    }

    &:nth-of-type(1) {
      top: 17%;
      left: 8%;
      height: auto;
      width: 30%;
      @include mq($from: tablet) {
        top: 21%;
        width: 20%;
      }
      @include mq($from: desktop) {
        top: 17%;
        width: 9%;
      }
    }

    &:nth-of-type(2) {
      top: 3%;
      right: 0;
      height: auto;
      width: 33%;
      @include mq($from: tablet) {
        right: 5%;
        width: 33%;
      }
      @include mq($from: desktop) {
        right: 20%;
        width: 11%;
      }
    }

    &:nth-of-type(3) {
      top: 77%;
      left: 3%;
      height: auto;
      width: 28%;
      @include mq($from: tablet) {
        left: 6%;
        width: 19%;
      }
      @include mq($from: desktop) {
        left: 23%;
        width: 7%;
      }
    }

    &:nth-of-type(4) {
      top: 60%;
      right: 9%;
      height: auto;
      width: 36%;
      @include mq($from: tablet) {
        top: 62%;
        right: 13%;
        width: 25%;
      }
      @include mq($from: desktop) {
        top: 60%;
        right: 9%;
        width: 15%;
      }
    }
  }
}
</style>
