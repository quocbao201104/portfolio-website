<template>
  <footer class="bg-dark-900 border-t border-dark-800">
    <div class="container-custom py-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Quốc Bảo. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-primary-400 transition-colors"
            :aria-label="link.name"
          >
            <component :is="getIcon(link.icon)" :size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next'
import { socialLinks } from '@/data/contact'

const currentYear = computed(() => new Date().getFullYear())

const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    twitter: Twitter
  }
  return icons[iconName] || Mail
}
</script>
