import type { ConstellationSkill, SkillCategory } from '../types/constellation'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    color: '#A78BFA', // Lavender Primary
    glowColor: 'rgba(167, 139, 250, 0.5)'
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    color: '#C4B5FD', // Lavender Light
    glowColor: 'rgba(196, 181, 253, 0.5)'
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    color: '#8B5CF6', // Lavender Dark
    glowColor: 'rgba(139, 92, 246, 0.5)'
  }
]

export const skills: ConstellationSkill[] = [
  // Frontend (Primary)
  { id: 'vue', name: 'Vue.js', level: 95, categoryId: 'frontend' },
  { id: 'typescript', name: 'TypeScript', level: 90, categoryId: 'frontend' },
  { id: 'nuxt', name: 'Nuxt.js', level: 88, categoryId: 'frontend' },
  { id: 'javascript', name: 'JavaScript', level: 92, categoryId: 'frontend' },
  { id: 'css', name: 'CSS/SCSS', level: 90, categoryId: 'frontend' },

  // Frameworks & Libraries
  { id: 'vuetify', name: 'Vuetify', level: 85, categoryId: 'frameworks' },
  { id: 'quasar', name: 'Quasar', level: 82, categoryId: 'frameworks' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 85, categoryId: 'frameworks' },
  { id: 'aurelia', name: 'Aurelia', level: 80, categoryId: 'frameworks' },

  // Tools & Workflow
  { id: 'git', name: 'Git/GitHub', level: 90, categoryId: 'tools' },
  { id: 'gitlab', name: 'GitLab', level: 85, categoryId: 'tools' },
  { id: 'figma', name: 'Figma', level: 80, categoryId: 'tools' },
  { id: 'azure', name: 'Azure', level: 75, categoryId: 'tools' }
]

// Golden angle for spiral distribution (radians)
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

// Generate positions using cluster-based layout with golden angle spiral
export function generatePositions(
  skills: ConstellationSkill[],
  categories: SkillCategory[]
): ConstellationSkill[] {
  const categoryMap = new Map<string, ConstellationSkill[]>()

  // Group skills by category
  skills.forEach((skill) => {
    const existing = categoryMap.get(skill.categoryId) || []
    existing.push(skill)
    categoryMap.set(skill.categoryId, existing)
  })

  // Define cluster centers for each category (normalized 0-1)
  const clusterCenters: Record<string, { x: number; y: number }> = {
    frontend: { x: 0.3, y: 0.35 },
    frameworks: { x: 0.7, y: 0.35 },
    tools: { x: 0.5, y: 0.7 }
  }

  const positionedSkills: ConstellationSkill[] = []

  categoryMap.forEach((categorySkills, categoryId) => {
    const center = clusterCenters[categoryId] || { x: 0.5, y: 0.5 }
    const clusterRadius = 0.15 // How spread out skills are within cluster

    categorySkills.forEach((skill, index) => {
      // Use golden angle spiral for even distribution
      const angle = index * GOLDEN_ANGLE
      const distance = Math.sqrt(index / categorySkills.length) * clusterRadius

      // Add some randomness for organic feel
      const jitterX = (Math.random() - 0.5) * 0.05
      const jitterY = (Math.random() - 0.5) * 0.05

      const x = Math.max(0.1, Math.min(0.9, center.x + Math.cos(angle) * distance + jitterX))
      const y = Math.max(0.1, Math.min(0.9, center.y + Math.sin(angle) * distance + jitterY))

      positionedSkills.push({
        ...skill,
        position: { x, y }
      })
    })
  })

  return positionedSkills
}

// Pre-computed skills with positions
export const positionedSkills = generatePositions(skills, skillCategories)

// Get category by ID
export function getCategoryById(id: string): SkillCategory | undefined {
  return skillCategories.find((cat) => cat.id === id)
}

// Get skills by category
export function getSkillsByCategory(categoryId: string): ConstellationSkill[] {
  return positionedSkills.filter((skill) => skill.categoryId === categoryId)
}
