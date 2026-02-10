<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import type { Project } from '../../data/projects'

const props = defineProps<{
  projects: Project[]
}>()

const activeFilter = ref('All')
const containerRef = ref<HTMLElement | null>(null)

const allTags = computed(() => {
  const tags = new Set<string>()
  props.projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return ['All', ...Array.from(tags).sort()]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return props.projects
  }
  return props.projects.filter(project =>
    project.tags.includes(activeFilter.value)
  )
})

function setFilter(tag: string) {
  activeFilter.value = tag
}

function checkReducedMotion(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onMounted(() => {
  if (checkReducedMotion()) return

  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out'
      }
    )
  })
})
</script>

<template>
  <div ref="containerRef">
    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects by technology">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="setFilter(tag)"
        role="tab"
        :aria-selected="activeFilter === tag"
        :aria-controls="'projects-panel'"
        class="px-4 py-2 rounded-full font-medium transition-all duration-300 touch-manipulation"
        :class="activeFilter === tag
          ? 'bg-primary-dark text-white glow-subtle-purple'
          : 'glass text-dark-muted hover:text-dark-text hover:bg-white/10'"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Projects Bento Grid -->
    <div
      id="projects-panel"
      role="tabpanel"
      class="bento-grid"
    >
      <TransitionGroup name="list">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="project-card group glass rounded-2xl overflow-hidden hover:glow-subtle-purple transition-all duration-500"
          :class="project.featured ? 'bento-lg' : 'bento-wide'"
        >
          <!-- Project Image -->
          <div
            class="overflow-hidden bg-dark-surface"
            :class="project.featured ? 'aspect-video' : 'aspect-[16/10]'"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark-text mb-2 group-hover:text-primary-light transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-dark-muted mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 text-xs font-medium bg-primary/20 text-primary-light rounded-full border border-primary/30"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-3">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 py-2.5 text-center bg-primary-dark hover:bg-primary text-white font-medium rounded-lg transition-all duration-300"
              >
                Live Demo
              </a>
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 py-2.5 text-center glass border border-white/10 hover:border-primary/50 text-dark-muted hover:text-primary-light font-medium rounded-lg transition-all duration-300"
              >
                View Code
              </a>
            </div>
          </div>
        </article>
      </TransitionGroup>
    </div>

    <!-- Empty State -->
    <div
      v-if="filteredProjects.length === 0"
      class="text-center py-12"
    >
      <p class="text-dark-muted">
        No projects found for "{{ activeFilter }}".
      </p>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.list-move {
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
