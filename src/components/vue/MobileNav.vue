<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from 'vue'
import type { NavItem } from '../../data/navigation'

defineProps<{
  navItems: NavItem[]
}>()

const isOpen = ref(false)
const menuPanel = ref<HTMLElement | null>(null)
const hamburgerButton = ref<HTMLElement | null>(null)

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) return

  if (e.key === 'Escape') {
    closeMenu()
    return
  }

  if (e.key === 'Tab') {
    const focusableEls = menuPanel.value?.querySelectorAll(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusableEls?.length) return

    const firstEl = focusableEls[0] as HTMLElement
    const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement

    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault()
      lastEl.focus()
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault()
      firstEl.focus()
    }
  }
}

watch(isOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeydown)
    nextTick(() => {
      const firstLink = menuPanel.value?.querySelector('a')
      firstLink?.focus()
    })
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

function toggle() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
  nextTick(() => {
    hamburgerButton.value?.focus()
  })
}
</script>

<template>
  <div class="relative">
    <!-- Hamburger button -->
    <button
      ref="hamburgerButton"
      @click="toggle"
      class="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
      :aria-expanded="isOpen"
      aria-controls="mobile-menu"
      aria-label="Toggle navigation menu"
    >
      <span class="relative w-6 h-5 flex flex-col justify-between">
        <span
          class="w-full h-0.5 bg-white rounded transition-all duration-300 origin-center"
          :class="{ 'rotate-45 translate-y-2': isOpen }"
        />
        <span
          class="w-full h-0.5 bg-white rounded transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"
        />
        <span
          class="w-full h-0.5 bg-white rounded transition-all duration-300 origin-center"
          :class="{ '-rotate-45 -translate-y-2': isOpen }"
        />
      </span>
    </button>

    <!-- Mobile menu overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          @click="closeMenu"
          aria-hidden="true"
        />
      </Transition>

      <Transition name="slide">
        <nav
          v-if="isOpen"
          ref="menuPanel"
          id="mobile-menu"
          class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] glass-strong z-50 shadow-2xl"
          aria-label="Mobile navigation"
        >
          <div class="p-6 pt-20">
            <ul class="space-y-2">
              <li v-for="item in navItems" :key="item.href">
                <a
                  :href="item.href"
                  @click="closeMenu"
                  class="block py-4 px-4 text-lg font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>

            <div class="mt-8 pt-8 border-t border-white/10">
              <a
                href="#contact"
                @click="closeMenu"
                class="block w-full py-4 text-center bg-primary-dark hover:bg-primary text-white font-medium rounded-lg transition-colors glow-subtle-purple"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </nav>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 300ms ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
