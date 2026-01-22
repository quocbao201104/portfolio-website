<template>
  <div class="pt-20 section-padding">
    <div class="container-custom">
      <SectionTitle title="About Me" subtitle="Get to know me better" />
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div class="space-y-6">
            <p class="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. My journey in software development started 
              during my university years, and I've been continuously learning and growing ever since.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              I specialize in modern JavaScript frameworks, particularly Vue.js and React, 
              and I'm always exploring new technologies and best practices. I believe in 
              writing clean, maintainable code and building applications that provide 
              exceptional user experiences.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, 
              reading tech blogs, or working on personal projects that challenge me to 
              learn something new.
            </p>
          </div>
          <div class="bg-dark-900 border border-dark-800 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-gray-100 mb-6">Quick Facts</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <MapPin class="text-primary-400 mt-1" :size="20" />
                <div>
                  <div class="text-gray-100 font-medium">Location</div>
                  <div class="text-gray-400">Ho Chi Minh City, Vietnam</div>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <GraduationCap class="text-primary-400 mt-1" :size="20" />
                <div>
                  <div class="text-gray-100 font-medium">Education</div>
                  <div class="text-gray-400">BS in Information Technology</div>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <Code class="text-primary-400 mt-1" :size="20" />
                <div>
                  <div class="text-gray-100 font-medium">Focus</div>
                  <div class="text-gray-400">Full-stack Web Development</div>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <Heart class="text-primary-400 mt-1" :size="20" />
                <div>
                  <div class="text-gray-100 font-medium">Interests</div>
                  <div class="text-gray-400">Open Source, Tech Communities</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-dark-900 border border-dark-800 rounded-xl p-8">
          <h3 class="text-2xl font-bold text-gray-100 mb-6">My Approach</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb class="text-primary-400" :size="32" />
              </div>
              <h4 class="font-semibold text-gray-100 mb-2">Problem Solving</h4>
              <p class="text-gray-400 text-sm">
                I enjoy breaking down complex problems into manageable solutions
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp class="text-primary-400" :size="32" />
              </div>
              <h4 class="font-semibold text-gray-100 mb-2">Continuous Learning</h4>
              <p class="text-gray-400 text-sm">
                Always staying updated with the latest technologies and best practices
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users class="text-primary-400" :size="32" />
              </div>
              <h4 class="font-semibold text-gray-100 mb-2">Collaboration</h4>
              <p class="text-gray-400 text-sm">
                I believe in teamwork and knowledge sharing for better outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import { MapPin, GraduationCap, Code, Heart, Lightbulb, TrendingUp, Users } from 'lucide-vue-next'
</script>
