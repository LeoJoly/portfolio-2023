<script setup lang="ts">
const iterator = ref([...Array(50).keys()])
</script>

<template>
  <div class="c-circle">
    <div class="c-circle__wrapper">
      <div v-for="i in iterator" :key="i" class="c-circle__panel" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$width: 3.77rem;

.c-circle {
  perspective: 550px;
  -webkit-perspective: 550px;
  animation: moveOrigin 5s infinite ease-in-out alternate;
  -webkit-animation: moveOrigin 5s infinite ease-in-out alternate;

  &__wrapper {
    display: flex;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    animation: rotate 25s infinite linear;
    -webkit-animation: rotate 25s infinite linear;
  }

  &__panel {
    position: absolute;
    overflow: hidden;
    height: 5rem;
    width: $width;
    background-color: $black;
    border-top: solid .2rem $white;
    border-bottom: solid .2rem $white;
    // Rotate and translate every panels according to their index
    transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(29.7rem);
    -webkit-transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(29.7rem);

    &::before {
      content: 'Typescript • Vue • Nuxt • React • Svelte • Node • CSS • SCSS • HTML • Strapi • Prismic • ';
      position: absolute;
      top: 1.2rem;
      left: var(--left);
      color: $color;
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: .05rem;
      text-transform: uppercase;
      width: max-content;
    }
  }
}

// Loop on every panels to set angle and left values
@for $i from 0 to 50 {
  .c-circle__panel:nth-child(#{$i + 1}) {
    --angle: #{calc(360deg / 50 * $i)};
    --left: #{$width * $i * -1};
  }
}

@include keyframes(rotate) {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
  }

  100% {
    transform: rotateY(-360deg);
    -webkit-transform: rotateY(-360deg);
  }
}

@include keyframes(moveOrigin) {
  0% {
    transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    perspective-origin: 50% calc(50% - 6.5rem);
    -webkit-transform-origin: 50% calc(50% - 6.5rem);
  }

  100% {
    transform: rotate(7deg);
    -webkit-transform: rotate(7deg);
    perspective-origin: 50% calc(50% + 5rem);
    -webkit-transform-origin: 50% calc(50% + 5rem);
  }
}
</style>
