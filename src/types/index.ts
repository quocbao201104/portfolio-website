export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  techStack: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  type: 'work' | 'education'
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
