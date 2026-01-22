<template>
  <div class="pt-20 section-padding">
    <div class="container-custom">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Let's work together on your next project" 
      />
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
              <p class="text-gray-300 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect.
              </p>
            </div>
            
            <div class="space-y-6">
              <a
                :href="`mailto:${contactEmail}`"
                class="flex items-center space-x-4 p-4 bg-dark-900 border border-dark-800 rounded-lg hover:border-primary-600 transition-colors group"
              >
                <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                  <Mail class="text-primary-400" :size="24" />
                </div>
                <div>
                  <div class="text-gray-400 text-sm">Email</div>
                  <div class="text-gray-100 font-medium">{{ contactEmail }}</div>
                </div>
              </a>
              
              <div
                v-for="link in socialLinks"
                :key="link.name"
                class="flex items-center space-x-4 p-4 bg-dark-900 border border-dark-800 rounded-lg hover:border-primary-600 transition-colors group"
              >
                <a
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center space-x-4 w-full"
                >
                  <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <component :is="getIcon(link.icon)" class="text-primary-400" :size="24" />
                  </div>
                  <div>
                    <div class="text-gray-400 text-sm">{{ link.name }}</div>
                    <div class="text-gray-100 font-medium">{{ link.name }}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h3 class="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" class="w-full">
                <Send class="inline mr-2" :size="18" />
                Send Message
              </Button>
              
              <p v-if="formStatus" :class="formStatus === 'success' ? 'text-primary-400' : 'text-red-400'" class="text-sm text-center">
                {{ formStatus === 'success' ? 'Message sent successfully! (Note: This is a demo form. In production, connect to a backend service.)' : 'Failed to send message. Please try again.' }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-vue-next'
import SectionTitle from '@/components/SectionTitle.vue'
import Button from '@/components/Button.vue'
import { socialLinks, contactEmail } from '@/data/contact'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formStatus = ref<'success' | 'error' | null>(null)

const handleSubmit = () => {
  // In a real application, you would send this to a backend API
  // For now, we'll just show a success message
  console.log('Form submitted:', form.value)
  formStatus.value = 'success'
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = { name: '', email: '', subject: '', message: '' }
    formStatus.value = null
  }, 3000)
}

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
