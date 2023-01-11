<script setup lang="ts">
import Lenis from '@studio-freight/lenis'
import wording from '@/content/en-US.json'
import { scrollTo } from '@/scripts/utils/scrollTo'
import { rotate } from '@/scripts/utils/rotate'

/** State */
const angle = ref(0)
const animation = ref<null | GSAPTimeline>(null)
const lenis = ref<null | Lenis>(null)

//** Template refs */
const start = ref(null)
const end = ref(null)
const about = ref(null)
const projects = ref(null)
const contact = ref(null)

const onNavigate = (ref: 'about' | 'projects' | 'contact') => {
  const sections = { about, projects, contact}

  scrollTo(sections[ref].value, window.innerWidth < 768 ? 70 : 90)
}

//** Methods */
const raf = (time: unknown) => {
  if (!lenis.value) return
  lenis.value.raf(time)
  window.requestAnimationFrame(raf)
}

onMounted(() => {
  // Setup header logo animation
  if (!animation.value) {
    animation.value = rotate(start.value, end.value, angle)
  }

  // Setup smooth scroller
  if (!lenis.value) {
    lenis.value = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    window.requestAnimationFrame(raf)
  }
})

onUnmounted(() => {
  if (animation.value) {
    animation.value.kill()
  }

  if (lenis.value) lenis.value.destroy()
})
</script>

<template>
  <div id="app">
    <span ref="start" />
    <UiMouse />
    <div class="l-line -left" />
    <LayoutHeader :angle="angle" @navigate="onNavigate" />
    <SectionHero />
    <div ref="about" />
    <UiMarqueeSlider :content="wording.about.title" :repetitions="18" />
    <SectionAbout />
    <div ref="projects" />
    <UiMarqueeSlider :content="wording.projects.title" :repetitions="13" />
    <SectionProjects />
    <div ref="contact" />
    <UiMarqueeSlider :content="wording.contact.title" :repetitions="17" />
    <SectionContact />
    <LayoutFooter />
    <div class="l-line -right" />
    <span ref="end" />
  </div>
</template>

<style lang="scss">
.l-line {
  position: fixed;
  top: 0;
  z-index: 300;
  width: .1rem;
  height: 100vh;
  background-color: $white;

  &.-left {
    left: 1rem;
    @include mq($from: tablet) {
      left: 2rem;
    }
    @include mq($from: desktop) {
      left: 3rem;
    }
  }

  &.-right {
    right: 1rem;
    @include mq($from: tablet) {
      right: 2rem;
    }
    @include mq($from: desktop) {
      right: 3rem;
    }
  }
}
</style>
