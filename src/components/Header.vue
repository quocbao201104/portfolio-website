<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
    <nav class="container-custom py-4">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
          Quoc Bao
        </router-link>
        
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>

        <ul
          :class="[
            'md:flex md:items-center md:space-x-8 md:static md:bg-transparent md:border-0 md:shadow-none md:py-0',
            'absolute top-full left-0 right-0 bg-dark-900 border-t border-dark-800 shadow-lg py-4',
            mobileMenuOpen ? 'flex flex-col space-y-4 px-4' : 'hidden'
          ]"
        >
          <li v-for="link in navLinks" :key="link.path">
            <router-link
              :to="link.path"
              class="text-gray-300 hover:text-primary-400 transition-colors font-medium"
              active-class="text-primary-400"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
