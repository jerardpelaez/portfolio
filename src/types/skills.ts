export interface Skill {
  id: string
  name: string
  level: number
  categoryId: string
  icon: string // Devicon class name
}

export interface SkillCategory {
  id: string
  name: string
  color: string
  glowColor: string
}
