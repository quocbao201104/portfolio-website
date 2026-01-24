<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding min-h-screen flex items-center">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
            Hi, I'm <span class="gradient-text">Quoc Bao</span>
          </h1>
          <p class="text-2xl md:text-3xl text-gray-400 mb-4">
            Backend Developer
          </p>
          <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            I build modern, scalable web applications with a focus on user experience and clean code.
            Passionate about learning new technologies and solving complex problems.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/projects" size="lg">
              View Projects
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats / Highlights -->
    <section class="section-padding bg-dark-900/50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">3+</div>
            <div class="text-gray-400">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">2+</div>
            <div class="text-gray-400">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">5+</div>
            <div class="text-gray-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="section-padding">
      <div class="container-custom">
        <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />
        <div class="flex flex-wrap justify-center gap-6">
          <div 
            v-for="project in featuredProjects"
            :key="project.id"
            class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
        <div class="text-center mt-12">
          <Button to="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Button from '@/components/Button.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { projects } from '@/data/projects'

const featuredProjects = computed(() => projects.filter(p => p.featured).slice(0, 3))
</script>
