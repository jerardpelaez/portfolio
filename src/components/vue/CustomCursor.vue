<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const cursorDot = ref<HTMLElement | null>(null)
const cursorRing = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const isExpanded = ref(false)

let mouseX = 0
let mouseY = 0
let dotX = 0
let dotY = 0
let ringX = 0
let ringY = 0
let animationId: number | null = null

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return true
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

function checkReducedMotion(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY

  if (!isVisible.value) {
    isVisible.value = true
  }
}

function onMouseEnterInteractive() {
  isExpanded.value = true
}

function onMouseLeaveInteractive() {
  isExpanded.value = false
}

function handleMagnetic(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  if (!target.hasAttribute('data-magnetic')) return

  const rect = target.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const deltaX = (e.clientX - centerX) * 0.3
  const deltaY = (e.clientY - centerY) * 0.3

  gsap.to(target, {
    x: deltaX,
    y: deltaY,
    duration: 0.3,
    ease: 'power2.out'
  })
}

function resetMagnetic(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  gsap.to(target, {
    x: 0,
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  })
}

function animate() {
  const dotSpeed = 1
  const ringSpeed = 0.15

  dotX += (mouseX - dotX) * dotSpeed
  dotY += (mouseY - dotY) * dotSpeed

  ringX += (mouseX - ringX) * ringSpeed
  ringY += (mouseY - ringY) * ringSpeed

  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`
  }

  if (cursorRing.value) {
    cursorRing.value.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
  }

  animationId = requestAnimationFrame(animate)
}

function setupInteractiveElements() {
  const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], input, textarea, select')

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', onMouseEnterInteractive)
    el.addEventListener('mouseleave', onMouseLeaveInteractive)

    if (el.hasAttribute('data-magnetic')) {
      el.addEventListener('mousemove', handleMagnetic as EventListener)
      el.addEventListener('mouseleave', resetMagnetic as EventListener)
    }
  })
}

function cleanupInteractiveElements() {
  const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], input, textarea, select')

  interactiveElements.forEach(el => {
    el.removeEventListener('mouseenter', onMouseEnterInteractive)
    el.removeEventListener('mouseleave', onMouseLeaveInteractive)

    if (el.hasAttribute('data-magnetic')) {
      el.removeEventListener('mousemove', handleMagnetic as EventListener)
      el.removeEventListener('mouseleave', resetMagnetic as EventListener)
    }
  })
}

onMounted(() => {
  if (isTouchDevice() || checkReducedMotion()) {
    return
  }

  document.body.classList.add('custom-cursor-active')

  window.addEventListener('mousemove', onMouseMove)

  animate()

  setupInteractiveElements()

  const observer = new MutationObserver(() => {
    cleanupInteractiveElements()
    setupInteractiveElements()
  })

  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.body.classList.remove('custom-cursor-active')

  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  cleanupInteractiveElements()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      ref="cursorDot"
      class="cursor-dot"
      aria-hidden="true"
    />
    <div
      v-if="isVisible"
      ref="cursorRing"
      class="cursor-ring"
      :class="{ expanded: isExpanded }"
      aria-hidden="true"
    />
  </Teleport>
</template>
