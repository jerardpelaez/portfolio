// Simplified animations - no GSAP, instant reveal
// All elements are shown immediately for better performance

export function initRevealAnimations() {
  // Show all elements immediately
  document.querySelectorAll('.reveal').forEach(el => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });
}

export function initHeroAnimation() {
  // Show hero elements immediately
  document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta, .hero-tech').forEach(el => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });
}

export function initAllAnimations() {
  initHeroAnimation();
  initRevealAnimations();
}
