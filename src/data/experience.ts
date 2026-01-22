import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-stack Developer',
    company: 'Personal Project – TruyenVietHay',
    location: 'Remote',
    startDate: '2024-06',
    endDate: 'Present',
    type: 'work',
    description: [
      'Developed a fullstack web application for online story reading using Vue 3 and Node.js',
      'Designed and implemented RESTful APIs with Express and MySQL',
      'Implemented JWT authentication with role-based access (Admin / Author / User)',
      'Built CRUD features with pagination for stories, chapters, comments, and users',
      'Integrated reading features such as follow, like, reading history, and chapter navigation'
    ]
  },
  // {
  //   id: '2',
  //   title: 'Frontend Developer Intern',
  //   company: 'Academic / Personal Projects',
  //   location: 'Remote',
  //   startDate: '2024-01',
  //   endDate: '2024-05',
  //   type: 'work',
  //   description: [
  //     'Built responsive user interfaces using Vue 3, TypeScript, and Tailwind CSS',
  //     'Integrated frontend with backend APIs and handled loading and error states',
  //     'Used Pinia for state management and Vue Router for routing',
  //     'Improved UI/UX for reading pages and admin dashboards'
  //   ]
  // },
  {
    id: '2',
    title: 'Information Technology Student',
    company: 'University',
    location: 'Vietnam',
    startDate: '2022-09',
    endDate: 'Present',
    type: 'education',
    description: [
      'Major in Information Technology',
      'Focused on web development, databases, and software engineering',
      'Self-studied backend development with Node.js and real-world projects',
      'Built multiple personal projects to practice fullstack development'
    ]
  }
]
