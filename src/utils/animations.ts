// Simplified animations - no GSAP, instant reveal
// All elements are shown immediately for better performance

export function initRevealAnimations() {
  // Show all elements immediately
  document.querySelectorAll('.reveal').forEach(el => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });
}

export function initSkillBars() {
  // Set skill bars to their target width immediately
  document.querySelectorAll('.skill-bar-fill').forEach(el => {
    const target = (el as HTMLElement).dataset.target || '0';
    (el as HTMLElement).style.width = target + '%';
  });
}

export function initHeroAnimation() {
  // Show hero elements immediately
  document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .hero-tech').forEach(el => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });
}

export function initAllAnimations() {
  initHeroAnimation();
  initRevealAnimations();
  initSkillBars();
}
