import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export const rotate = (start: Element | null, end: Element | null, target: Ref) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: start,
      start: 'top top',
      endTrigger: end,
      end: 'bottom bottom',
      scrub: 1
    }
  })

  tl.to(target, { value: 1080 })

  return tl
}