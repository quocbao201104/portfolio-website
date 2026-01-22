import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    name: 'TruyenVietHay – Online Story Reading Platform',
    description: 'Full-stack web platform for reading and managing online stories',
    longDescription:
      'A full-stack web application that allows users to read, follow, and interact with stories, while authors can manage content and admins control moderation workflows. The system includes authentication, role-based access, reading history, and gamification features such as points, levels, and daily tasks.',
    techStack: [
      'Vue 3',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MySQL',
      'JWT',
      'Pinia'
    ],
    features: [
      'Auth & RBAC (Admin / Author / User)',
      'Story & Chapter CRUD + pagination',
      'Reading history & chapter navigation',
      'Follow, like & comment system',
      'Gamification: tasks, points & levels',
      'Admin dashboard & content approval'
    ],
    liveUrl: '', // nếu chưa deploy thì để ''
    githubUrl: 'https://github.com/quocbao201104/TruyenVietHay',
    featured: true
  }
]

  // {
  //   id: '2',
  //   name: 'Task Management App',
  //   description: 'Collaborative task management with real-time updates',
  //   longDescription: 'A real-time collaborative task management application that helps teams organize and track their work efficiently.',
  //   techStack: ['Vue 3', 'TypeScript', 'Socket.io', 'Node.js', 'PostgreSQL'],
  //   features: [
  //     'Real-time collaboration',
  //     'Task assignments & due dates',
  //     'Project boards & kanban view',
  //     'Team member management',
  //     'Activity timeline'
  //   ],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com/yourusername/taskapp'
  // },
  // {
  //   id: '3',
  //   name: 'Weather Dashboard',
  //   description: 'Beautiful weather app with location-based forecasts',
  //   longDescription: 'A responsive weather dashboard that provides detailed forecasts, weather maps, and location-based weather information.',
  //   techStack: ['Vue 3', 'TypeScript', 'OpenWeather API', 'Chart.js'],
  //   features: [
  //     'Current weather & forecasts',
  //     'Interactive weather maps',
  //     'Location-based search',
  //     'Weather charts & graphs',
  //     'Dark/light theme'
  //   ],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com/yourusername/weather'
  // },
  // {
  //   id: '4',
  //   name: 'Blog Platform',
  //   description: 'Modern blog platform with markdown support',
  //   longDescription: 'A full-featured blog platform with markdown editor, syntax highlighting, and content management capabilities.',
  //   techStack: ['Vue 3', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Marked'],
  //   features: [
  //     'Markdown editor',
  //     'Syntax highlighting',
  //     'Tag & category system',
  //     'Comment system',
  //     'SEO optimization',
  //     'RSS feed'
  //   ],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com/yourusername/blog'
  // }
