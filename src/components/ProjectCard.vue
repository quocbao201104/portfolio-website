<template>
  <div
    class="bg-dark-900 border border-dark-800 rounded-xl p-6 card-hover group"
  >
    <div v-if="project.featured" class="mb-3">
      <span class="inline-block px-3 py-1 text-xs font-semibold bg-primary-600/20 text-primary-400 rounded-full">
        Featured Project
      </span>
    </div>
    
    <h3 class="text-xl font-bold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors">
      {{ project.name }}
    </h3>
    
    <p class="text-gray-400 mb-4 line-clamp-2">
      {{ project.description }}
    </p>
    
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tech in project.techStack"
        :key="tech"
        class="px-2 py-1 text-xs bg-dark-800 text-gray-300 rounded"
      >
        {{ tech }}
      </span>
    </div>
    
    <div class="flex space-x-4">
      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary-400 hover:text-primary-300 transition-colors flex items-center space-x-1"
      >
        <ExternalLink :size="16" />
        <span class="text-sm">Live Demo</span>
      </a>
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-gray-300 transition-colors flex items-center space-x-1"
      >
        <Github :size="16" />
        <span class="text-sm">GitHub</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'
import type { Project } from '@/types'

interface Props {
  project: Project
}

defineProps<Props>()
</script>
