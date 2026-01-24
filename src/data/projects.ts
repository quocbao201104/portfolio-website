import type { Project } from '@/types'

export const projects: Project[] = [
  {
  id: '1',
  name: 'TruyenVietHay – Online Story Reading Platform (Backend System)',
  description: 'Scalable backend system for an online story reading platform',
  longDescription:
    'A production-oriented backend system powering an online story reading platform. It handles content management, user interactions, and administrative workflows with a focus on scalability, security, and performance.',
  techStack: [
    'Node.js',
    'Express',
    'MySQL',
    'REST API',
    'JWT',
    'RBAC',
    // 'PM2',
    // 'Nginx'
  ],
  architecture: [
    'MVC-based backend architecture',
    'RESTful API design',
    'Relational database schema design',
    'Token-based authentication & authorization'
  ],
  features: [
    'JWT authentication & role-based access control (Admin / Author / User)',
    'Story & chapter management with pagination and approval workflow',
    'Reading history & chapter navigation',
    'Follow, like & comment system',
    'Gamification system: tasks, points & user levels',
    'Admin dashboard for content moderation'
  ],
  githubUrl: 'https://github.com/quocbao201104/TruyenVietHay',
  featured: true
  },
  
  {
  id: '2',
  name: 'Generic Content Ingestion Crawler (Node.js)',
  description: 'A sequential crawler for ingesting and normalizing paginated content.',
  longDescription:
    'A backend engineering portfolio project demonstrating a complete content ingestion pipeline built with Node.js. \
The system is designed to sequentially traverse paginated content sources, normalize unstructured HTML into clean text data, \
and persist it into a relational database. The focus of the project is on architecture, data processing reliability, \
and safe automation patterns rather than large-scale scraping.',
  techStack: [
    'Node.js',
    'Axios',
    'Cheerio',
    'MySQL',
    'Dotenv'
  ],
  architecture: [
    'Crawler layer for controlled HTTP fetching',
    'Parser layer for structured HTML normalization',
    'DAO / Model layer for database persistence'
  ],
  features: [
    'Sequential crawling with configurable delay',
    'Duplicate detection via slug-based checks',
    'Robust HTML-to-text normalization',
    'Modular and extensible architecture'
  ],
  githubUrl: 'https://github.com/quocbao201104/nodejs-content-crawler',
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
