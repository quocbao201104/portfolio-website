<template>
  <div class="pt-20 section-padding">
    <div class="container-custom">
      <SectionTitle 
        title="Skills & Technologies" 
        subtitle="Technologies I work with" 
      />
      
      <div class="space-y-12">
        <div v-for="category in skillCategories" :key="category.name">
          <h3 class="text-2xl font-bold text-gray-100 mb-6 flex items-center space-x-2">
            <component :is="category.icon" class="text-primary-400" :size="24" />
            <span>{{ category.name }}</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Server, Database, Wrench } from 'lucide-vue-next'
import SectionTitle from '@/components/SectionTitle.vue'
import SkillCard from '@/components/SkillCard.vue'
import { skills } from '@/data/skills'
import type { Skill } from '@/types'

const skillCategories = [
  // { name: 'Frontend', key: 'frontend', icon: Code },
  { name: 'Backend', key: 'backend', icon: Server },
  { name: 'Database', key: 'database', icon: Database },
  { name: 'Tools & Others', key: 'tools', icon: Wrench }
]

const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category)
}
</script>
