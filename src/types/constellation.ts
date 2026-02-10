export interface ConstellationSkill {
  id: string
  name: string
  level: number // 75-100, maps to star size and brightness
  categoryId: string // For coloring and groupings
  position?: { x: number; y: number } // 0-1 normalized coordinates
}

export interface SkillCategory {
  id: string
  name: string
  color: string // Hex color for stars in this category
  glowColor: string // Glow effect color
}

export interface ConstellationNode {
  skill: ConstellationSkill
  x: number // Canvas x coordinate
  y: number // Canvas y coordinate
  radius: number // Star radius based on level
  brightness: number // 0-1 brightness based on level
  baseX: number // Original x for drift animation
  baseY: number // Original y for drift animation
  driftOffset: { x: number; y: number } // Current drift offset
  twinklePhase: number // Phase offset for twinkle animation
}

export interface Connection {
  from: ConstellationNode
  to: ConstellationNode
  opacity: number // Line opacity
}

export interface TooltipData {
  visible: boolean
  x: number
  y: number
  skill: ConstellationSkill | null
  category: SkillCategory | null
}
