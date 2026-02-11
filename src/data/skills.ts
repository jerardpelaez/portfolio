import type { Skill, SkillCategory } from '../types/skills'

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
    id: 'backend',
    name: 'Backend',
    color: '#6EE7B7',
    glowColor: 'rgba(110, 231, 183, 0.5)'
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
  { id: 'html', name: 'HTML', level: 95, categoryId: 'frontend', icon: 'devicon-html5-plain colored' },
  { id: 'css', name: 'CSS/SCSS', level: 90, categoryId: 'frontend', icon: 'devicon-css3-plain colored' },
  { id: 'javascript', name: 'JavaScript', level: 92, categoryId: 'frontend', icon: 'devicon-javascript-plain colored' },
  { id: 'typescript', name: 'TypeScript', level: 90, categoryId: 'frontend', icon: 'devicon-typescript-plain colored' },

  // Frameworks & Libraries
  { id: 'vue', name: 'Vue.js', level: 95, categoryId: 'frameworks', icon: 'devicon-vuejs-plain colored' },
  { id: 'nuxt', name: 'Nuxt.js', level: 88, categoryId: 'frameworks', icon: 'devicon-nuxt-original colored' },
  { id: 'astro', name: 'Astro', level: 80, categoryId: 'frameworks', icon: 'devicon-astro-plain colored' },
  { id: 'vuetify', name: 'Vuetify', level: 85, categoryId: 'frameworks', icon: 'devicon-vuetify-plain colored' },
  { id: 'quasar', name: 'Quasar', level: 82, categoryId: 'frameworks', icon: 'devicon-quasar-plain colored' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 85, categoryId: 'frameworks', icon: 'devicon-tailwindcss-original colored' },
  { id: 'aurelia', name: 'Aurelia', level: 80, categoryId: 'frameworks', icon: 'devicon-aurelia-plain colored' },
  { id: 'laravel', name: 'Laravel', level: 70, categoryId: 'frameworks', icon: 'devicon-laravel-original colored' },
  { id: 'rails', name: 'Rails', level: 65, categoryId: 'frameworks', icon: 'devicon-rails-plain colored' },
  { id: 'dotnet', name: 'ASP.NET', level: 65, categoryId: 'frameworks', icon: 'devicon-dotnetcore-plain colored' },

  // Backend
  { id: 'php', name: 'PHP', level: 70, categoryId: 'backend', icon: 'devicon-php-plain colored' },
  { id: 'ruby', name: 'Ruby', level: 65, categoryId: 'backend', icon: 'devicon-ruby-plain colored' },
  { id: 'csharp', name: 'C#', level: 65, categoryId: 'backend', icon: 'devicon-csharp-plain colored' },

  // Tools & Workflow
  { id: 'git', name: 'Git/GitHub', level: 90, categoryId: 'tools', icon: 'devicon-git-plain colored' },
  { id: 'gitlab', name: 'GitLab', level: 85, categoryId: 'tools', icon: 'devicon-gitlab-plain colored' },
  { id: 'figma', name: 'Figma', level: 80, categoryId: 'tools', icon: 'devicon-figma-plain colored' },
  { id: 'azure', name: 'Azure', level: 75, categoryId: 'tools', icon: 'devicon-azure-plain colored' },
  { id: 'nodejs', name: 'Node.js', level: 80, categoryId: 'tools', icon: 'devicon-nodejs-plain colored' },
  { id: 'npm', name: 'npm', level: 85, categoryId: 'tools', icon: 'devicon-npm-original-wordmark colored' },
  { id: 'bun', name: 'Bun', level: 78, categoryId: 'tools', icon: 'devicon-bun-plain colored' },
  { id: 'claude', name: 'Claude Code', level: 85, categoryId: 'tools', icon: 'custom' }
]
