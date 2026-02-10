<script setup lang="ts">
import { computed } from 'vue'
import type { ConstellationSkill, SkillCategory } from '../../types/constellation'

interface Props {
  skills: ConstellationSkill[]
  categories: SkillCategory[]
}

const props = defineProps<Props>()

// Group skills by category
const skillsByCategory = computed(() => {
  const groups = new Map<string, { category: SkillCategory; skills: ConstellationSkill[] }>()

  props.categories.forEach((cat) => {
    groups.set(cat.id, { category: cat, skills: [] })
  })

  props.skills.forEach((skill) => {
    const group = groups.get(skill.categoryId)
    if (group) {
      group.skills.push(skill)
    }
  })

  // Sort skills by level within each category (highest first)
  groups.forEach((group) => {
    group.skills.sort((a, b) => b.level - a.level)
  })

  return Array.from(groups.values())
})

// Map level to chip size class
function getChipSize(level: number): string {
  if (level >= 90) return 'text-base px-4 py-2'
  if (level >= 85) return 'text-sm px-3 py-1.5'
  return 'text-sm px-3 py-1.5'
}

// Map level to visual weight (opacity/boldness)
function getChipWeight(level: number): string {
  if (level >= 90) return 'font-semibold'
  if (level >= 85) return 'font-medium'
  return 'font-normal'
}
</script>

<template>
  <div class="space-y-8">
    <div
      v-for="group in skillsByCategory"
      :key="group.category.id"
      class="space-y-4"
    >
      <!-- Category Header -->
      <div class="flex items-center gap-3">
        <span
          class="w-3 h-3 rounded-full"
          :style="{
            backgroundColor: group.category.color,
            boxShadow: `0 0 12px ${group.category.glowColor}`
          }"
        />
        <h3 class="text-lg font-semibold text-white">
          {{ group.category.name }}
        </h3>
      </div>

      <!-- Skills Chips -->
      <div class="flex flex-wrap gap-3">
        <div
          v-for="skill in group.skills"
          :key="skill.id"
          class="group relative inline-flex items-center gap-2 rounded-full border transition-all duration-200 hover:scale-105"
          :class="[getChipSize(skill.level), getChipWeight(skill.level)]"
          :style="{
            backgroundColor: `${group.category.color}15`,
            borderColor: `${group.category.color}40`,
            color: group.category.color
          }"
        >
          <!-- Skill Name -->
          <span class="text-white">{{ skill.name }}</span>

          <!-- Level Badge -->
          <span
            class="inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded-full text-xs"
            :style="{
              backgroundColor: `${group.category.color}30`,
              color: group.category.color
            }"
          >
            {{ skill.level }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
