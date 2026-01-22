<template>
  <div class="text-center mb-12">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
      <span class="gradient-text">{{ title }}</span>
    </h2>
    <p v-if="subtitle" class="text-gray-400 text-lg max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>
