<template>
  <div class="bg-dark-900 border border-dark-800 rounded-lg p-4 card-hover">
    <div class="flex items-center justify-between mb-2">
      <h4 class="font-semibold text-gray-100">{{ skill.name }}</h4>
      <span class="text-xs text-gray-400 capitalize">{{ skill.level }}</span>
    </div>
    <div class="w-full bg-dark-800 rounded-full h-2">
      <div
        :class="[
          'h-2 rounded-full transition-all duration-500',
          levelColors[skill.level]
        ]"
        :style="{ width: `${levelPercentages[skill.level]}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '@/types'

interface Props {
  skill: Skill
}

defineProps<Props>()

const levelPercentages = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 100
}

const levelColors = {
  beginner: 'bg-gray-500',
  intermediate: 'bg-blue-500',
  advanced: 'bg-primary-500',
  expert: 'bg-primary-600'
}
</script>
