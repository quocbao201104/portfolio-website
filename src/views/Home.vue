<template>
  <div class="cv-page min-h-screen bg-tech-pattern text-gray-300 font-sans selection:bg-primary-500/30 selection:text-white">
    
    <div class="max-w-8xl mx-auto md:h-screen md:overflow-hidden flex flex-col md:flex-row">
      
      <!-- Left Sidebar (Desktop) / Top Header (Mobile) -->
      <aside class="w-full md:w-80 lg:w-96 md:h-full bg-dark-900/80 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/5 md:flex-shrink-0 z-20 relative">
        <SideProfile />
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 md:h-full md:overflow-y-auto relative z-10 scroll-smooth">
        <div class="container-custom py-10 md:py-16 md:px-12 max-w-5xl mx-auto space-y-12">
          
          <!-- About / Summary Section -->
          <section class="animate-fade-in-up">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
              About Me
            </h2>
            <div class="glass-card p-6 md:p-8">
              <p class="text-lg leading-relaxed text-gray-300">
                {{ personalInfo.summary }}
              </p>
            </div>
          </section>

          <!-- Experience Section -->
          <section class="animate-fade-in-up" style="animation-delay: 100ms;">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
              Experience
            </h2>
            <div class="relative pl-4 space-y-8">
              <!-- Connecting Line -->
              <div class="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent"></div>
              
              <div 
                v-for="exp in sortedExperiences" 
                :key="exp.id"
                class="relative pl-8 group"
              >
                <!-- Timeline Dot -->
                <div class="absolute left-[-5px] top-2 w-4 h-4 rounded-full bg-dark-950 border-2 border-primary-500 group-hover:bg-primary-500 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-all duration-300 z-10"></div>
                
                <div class="glass-card p-6 border-l-4 border-l-primary-500/50 hover:border-l-primary-500 transition-colors">
                  <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{{ exp.title }}</h3>
                      <p class="text-lg text-gray-400 font-medium">{{ exp.company }}</p>
                    </div>
                    <div class="mt-2 md:mt-0 px-3 py-1 rounded-full bg-dark-800/50 border border-white/5 text-sm font-mono text-primary-400 whitespace-nowrap">
                      {{ formatDate(exp.startDate) }} - {{ formatDate(exp.endDate) }}
                    </div>
                  </div>
                  
                  <ul class="space-y-2 text-gray-400">
                    <li v-for="(desc, idx) in exp.description" :key="idx" class="flex gap-3">
                      <span class="text-primary-500 mt-1.5">▹</span>
                      <span>{{ desc }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

           <!-- Skills Section (Mobile Only - Desktop is in Sidebar) -->
           <section class="md:hidden animate-fade-in-up" style="animation-delay: 200ms;">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
              Technical Skills
            </h2>
            <SkillsGrid :skills="skills" />
          </section>

          <!-- Featured Projects -->
          <section class="animate-fade-in-up" style="animation-delay: 300ms;">
             <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
              Featured Projects
            </h2>
            <div class="grid gap-8">
              <div 
                v-for="project in projects" 
                :key="project.id"
                class="glass-card overflow-hidden group hover:border-primary-500/30 transition-all duration-300"
              >
                <!-- Project Top Bar -->
                <div class="bg-dark-950/50 px-6 py-3 border-b border-white/5 flex items-center justify-between">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div class="text-xs font-mono text-gray-500">project-{{ project.id }}.ts</div>
                </div>

                <div class="p-6 md:p-8">
                   <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 class="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {{ project.name }}
                        </h3>
                        <p class="text-gray-400 leading-relaxed max-w-2xl">
                          {{ project.description }}
                        </p>
                      </div>
                      <div class="flex gap-3 mt-4 md:mt-0">
                         <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="p-2 rounded-lg bg-dark-800 hover:bg-primary-600 hover:text-white text-gray-400 transition-all" title="Live Demo">
                           <i class="fas fa-external-link-alt"></i>
                         </a>
                         <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="p-2 rounded-lg bg-dark-800 hover:bg-white hover:text-black text-gray-400 transition-all" title="Source Code">
                           <i class="fab fa-github"></i>
                         </a>
                      </div>
                   </div>

                   <!-- Tech Stack -->
                   <div class="flex flex-wrap gap-2 mb-6">
                      <span 
                        v-for="tech in project.techStack" 
                        :key="tech"
                        class="px-2.5 py-1 rounded bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-mono"
                      >
                        {{ tech }}
                      </span>
                   </div>

                   <!-- Details Grid -->
                   <div class="grid md:grid-cols-2 gap-6 p-4 rounded-xl bg-dark-950/30 border border-white/5">
                      <div>
                        <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                        <ul class="space-y-2">
                           <li v-for="(feat, idx) in project.features.slice(0, 4)" :key="idx" class="flex gap-2 text-sm text-gray-400">
                              <span class="text-primary-500">▹</span>
                              <span class="line-clamp-2">{{ feat }}</span>
                           </li>
                        </ul>
                      </div>
                      <div>
                         <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Architecture</h4>
                         <ul class="space-y-2">
                           <li v-for="(arch, idx) in project.architecture?.slice(0, 4)" :key="idx" class="flex gap-2 text-sm text-gray-400">
                              <span class="text-blue-500">▹</span>
                              <span class="line-clamp-2">{{ arch }}</span>
                           </li>
                        </ul>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Footer Credit -->
          <div class="text-center pt-20 pb-10 text-gray-600 text-sm">
             <p>Designed & Built by <span class="text-gray-400">Quoc Bao</span></p>
             <p class="mt-1 font-mono text-xs opacity-50">v2.0.0 • Tech Stack: Vue 3 + Tailwind</p>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SideProfile from '@/components/SideProfile.vue'
import SkillsGrid from '@/components/SkillsGrid.vue'
import { personalInfo } from '@/data/personal'
import { skills } from '@/data/skills'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'

// Helper for date formatting
const formatDate = (date: string): string => {
  if (date === 'Present') return 'Present'
  const [year, month] = date.split('-')
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${monthNames[parseInt(month) - 1]} ${year}`
}
// Sort experiences by date (most recent first)
const sortedExperiences = computed(() => {
  return [...experiences].sort((a, b) => {
    const dateA = a.endDate === 'Present' ? '9999-12' : a.endDate
    const dateB = b.endDate === 'Present' ? '9999-12' : b.endDate
    return dateB.localeCompare(dateA)
  })
})
</script>

<style scoped>
@media print {
  .cv-page {
    background: white;
  }
  
  .project-item {
    page-break-inside: avoid;
  }
}
</style>
