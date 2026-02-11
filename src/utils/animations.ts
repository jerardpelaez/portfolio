// Scroll-reveal animations using IntersectionObserver

export function initRevealAnimations(): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach((el) => {
      (el as HTMLElement).classList.add('revealed')
    })
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
}

export function initHeroAnimation(): void {
  // Hero elements use CSS animations that play on load - no JS needed
  // This function is kept for compatibility
}

export function initAllAnimations(): void {
  initHeroAnimation()
  initRevealAnimations()
}
