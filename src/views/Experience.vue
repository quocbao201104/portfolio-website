<template>
  <div class="pt-20 section-padding">
    <div class="container-custom">
      <SectionTitle 
        title="Experience & Education" 
        subtitle="My professional journey" 
      />
      
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-800 transform md:-translate-x-1/2"></div>
          
          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="exp.id"
              class="relative"
            >
              <!-- Timeline dot -->
              <div
                :class="[
                  'absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-dark-950 transform md:-translate-x-1/2',
                  'bg-primary-500 z-10'
                ]"
              ></div>
              
              <!-- Content -->
              <div
                :class="[
                  'ml-20 md:ml-0',
                  index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right md:w-1/2' : 'md:ml-auto md:pl-8 md:text-left md:w-1/2'
                ]"
              >
                <div class="bg-dark-900 border border-dark-800 rounded-xl p-6">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xl font-bold text-gray-100">{{ exp.title }}</h3>
                    <span
                      class="px-3 py-1 text-xs font-semibold rounded-full"
                      :class="exp.type === 'work' ? 'bg-primary-600/20 text-primary-400' : 'bg-blue-600/20 text-blue-400'"
                    >
                      {{ exp.type === 'work' ? 'Work' : 'Education' }}
                    </span>
                  </div>
                  <h4 class="text-lg font-semibold text-primary-400 mb-1">{{ exp.company }}</h4>
                  <p class="text-gray-400 text-sm mb-2">{{ exp.location }}</p>
                  <p class="text-gray-500 text-sm mb-4">
                    {{ formatDate(exp.startDate) }} - {{ exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate) }}
                  </p>
                  <ul class="space-y-2">
                    <li
                      v-for="(desc, idx) in exp.description"
                      :key="idx"
                      class="text-gray-300 flex items-start space-x-2"
                    >
                      <span class="text-primary-400 mt-1">•</span>
                      <span>{{ desc }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import { experiences } from '@/data/experience'

const formatDate = (dateString: string): string => {
  const date = new Date(dateString + '-01')
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>
