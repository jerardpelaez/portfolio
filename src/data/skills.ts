import type { Skill, SkillCategory } from '../types/constellation'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    color: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.5)'
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    color: '#C4B5FD',
    glowColor: 'rgba(196, 181, 253, 0.5)'
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    color: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.5)'
  }
]

export const skills: Skill[] = [
  // Frontend
  { id: 'vue', name: 'Vue.js', level: 95, categoryId: 'frontend', icon: 'devicon-vuejs-plain colored' },
  { id: 'typescript', name: 'TypeScript', level: 90, categoryId: 'frontend', icon: 'devicon-typescript-plain colored' },
  { id: 'nuxt', name: 'Nuxt.js', level: 88, categoryId: 'frontend', icon: 'devicon-nuxt-original colored' },
  { id: 'javascript', name: 'JavaScript', level: 92, categoryId: 'frontend', icon: 'devicon-javascript-plain colored' },
  { id: 'css', name: 'CSS/SCSS', level: 90, categoryId: 'frontend', icon: 'devicon-css3-plain colored' },

  // Frameworks & Libraries
  { id: 'vuetify', name: 'Vuetify', level: 85, categoryId: 'frameworks', icon: 'devicon-vuetify-plain colored' },
  { id: 'quasar', name: 'Quasar', level: 82, categoryId: 'frameworks', icon: 'devicon-quasar-plain colored' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 85, categoryId: 'frameworks', icon: 'devicon-tailwindcss-original colored' },
  { id: 'aurelia', name: 'Aurelia', level: 80, categoryId: 'frameworks', icon: 'devicon-aurelia-plain colored' },

  // Tools & Workflow
  { id: 'git', name: 'Git/GitHub', level: 90, categoryId: 'tools', icon: 'devicon-git-plain colored' },
  { id: 'gitlab', name: 'GitLab', level: 85, categoryId: 'tools', icon: 'devicon-gitlab-plain colored' },
  { id: 'figma', name: 'Figma', level: 80, categoryId: 'tools', icon: 'devicon-figma-plain colored' },
  { id: 'azure', name: 'Azure', level: 75, categoryId: 'tools', icon: 'devicon-azure-plain colored' }
]
