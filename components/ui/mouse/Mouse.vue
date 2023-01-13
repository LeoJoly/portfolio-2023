<script setup lang="ts">
// state
const x = ref(0)
const y = ref(0)
const { isHover } = useMouse()

/** Methods */
const onMouseMove  = (event: MouseEvent) => {
  x.value = event.x
  y.value = event.y
}

onMounted(() => window.addEventListener('mousemove', onMouseMove))
onBeforeUnmount(() => window.removeEventListener('mousemove', onMouseMove))
</script>

<template>
  <div :class="['c-mouse', { '-hover': isHover }]" :style="`top: ${y}px; left: ${x}px;`" />
</template>

<style lang="scss" scoped>
.c-mouse {
  position: fixed;
  z-index: 500;
  height: 3rem;
  width: 3rem;
  background-color: $color;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
  mix-blend-mode: difference;
  transition: height 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000),
              width 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000);

  @include mq($until: desktop) {
    display: none;
  }

  &.-hover {
    height: 6rem;
    width: 6rem;
  }
}
</style>