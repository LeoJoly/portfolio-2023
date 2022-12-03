<script setup lang="ts">
import wording from '@/content/en-US.json'
import { scrollTo } from '@/scripts/utils/scrollTo'
import { rotate } from '@/scripts/utils/rotate'

/** State */
const angle = ref(0)
const animation = ref<null | GSAPTimeline>(null)

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

onMounted(() => {
  if (!animation.value) {
    animation.value = rotate(start.value, end.value, angle)
  }
})

onUnmounted(() => {
  if (animation.value) {
    animation.value.kill()
  }
})
</script>

<template>
  <div id="app">
    <span ref="start" />
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
