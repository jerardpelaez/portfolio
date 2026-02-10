<script setup lang="ts">
import { onMounted, onUnmounted, provide } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

function checkReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onMounted(() => {
  if (checkReducedMotion()) {
    return
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  document.documentElement.classList.add('lenis')
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
    lenis = null
    document.documentElement.classList.remove('lenis')
  }
})

provide('lenis', lenis)
</script>

<template>
  <slot />
</template>
