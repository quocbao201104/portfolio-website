import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Backend Developer',
    company: 'Personal Project – TruyenVietHay',
    startDate: '2024-06',
    endDate: 'Present',
    description: [
      'Architected and developed a robust backend system for online story reading using Node.js',
      'Designed and implemented RESTful APIs with Express and MySQL',
      'Implemented JWT authentication with role-based access (Admin / Author / User)',
      'Built scalable CRUD features with pagination for stories, chapters, comments, and users',
      'Optimized database queries and API performance for reading features'
    ]
  },
  {
    id: '2',
    title: 'Information Technology Student',
    company: 'University',
    startDate: '2022-09',
    endDate: 'Present',
    description: [
      'Major in Information Technology',
      'Focused on web development, databases, and software engineering',
      'Self-studied backend development with Node.js and real-world projects',
      'Built multiple personal projects to practice backend development'
    ]
  }
]
