import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const scrollTo = (y: Element | null, offsetY = 0) => {
  if (!y) return
  
  gsap.to(window, {
    duration: 1,
    scrollTo: { y, offsetY },
    ease: 'power3.out'
  })
}
