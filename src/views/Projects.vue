<template>
  <div class="pt-20 section-padding">
    <div class="container-custom">
      <SectionTitle 
        title="My Projects" 
        subtitle="A collection of my recent work" 
      />
      
      <!-- Featured Project -->
      <div v-if="featuredProject" class="mb-16">
        <div class="bg-gradient-to-br from-dark-900 to-dark-800 border border-dark-700 rounded-2xl p-8 md:p-12">
          <div class="mb-4">
            <span class="inline-block px-4 py-2 text-sm font-semibold bg-primary-600/20 text-primary-400 rounded-full">
              Featured Project
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            {{ featuredProject.name }}
          </h2>
          <p class="text-lg text-gray-300 mb-6 max-w-3xl">
            {{ featuredProject.longDescription }}
          </p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in featuredProject.techStack"
              :key="tech"
              class="px-3 py-1 text-sm bg-dark-800 text-gray-300 rounded-lg"
            >
              {{ tech }}
            </span>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-100 mb-3">Key Features:</h3>
            <ul class="grid md:grid-cols-2 gap-2">
              <li
                v-for="feature in featuredProject.features"
                :key="feature"
                class="flex items-start space-x-2 text-gray-300"
              >
                <Check class="text-primary-400 mt-1 flex-shrink-0" :size="18" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-4">
            <a
              v-if="featuredProject.liveUrl && featuredProject.liveUrl.trim()"
              :href="featuredProject.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink :size="18" />
              <span>View Live Demo</span>
            </a>
            <a
              v-if="featuredProject.githubUrl && featuredProject.githubUrl.trim()"
              :href="featuredProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-dark-800 hover:bg-dark-700 text-gray-100 rounded-lg transition-colors"
            >
              <Github :size="18" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <div v-if="otherProjects.length > 0">
        <h3 class="text-2xl font-bold text-gray-100 mb-8">Other Projects</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="project in otherProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Check, ExternalLink, Github } from 'lucide-vue-next'
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

const featuredProject = computed(() => projects.find(p => p.featured))
const otherProjects = computed(() => projects.filter(p => !p.featured))
</script>
