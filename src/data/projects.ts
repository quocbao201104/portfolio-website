import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    name: 'TruyenVietHay – Online Story Reading Platform',
    description: 'A full-feature story platform with gamification and high-performance caching.',
    longDescription:
      'A robust backend system designed for a story reading platform. It features a complex gamification engine (Tasks, EXP, Currency), optimized content delivery via caching layers, and a secure Role-Based Access Control (RBAC) system. The project demonstrates advanced database query optimizations and API design patterns for scalability.',
    techStack: [
      'Node.js',
      'Express',
      'MySQL',
      'Node-cache',
      'REST API',
      'JWT',
      'RBAC',
      'Cloudinary',
      'Aiven',
      'Render',
      'Test Accounts for HR: baodevnode(user) - baodev(author) - baodev1(admin) (password: 123456)', 
    ],
    architecture: [
      'MVC-based architecture',
      'Layered Caching Strategy (Node-cache)',
      'RESTful API design',
      'Relational database with Fulltext Search',
      'Token-based authentication & authorization'
    ],
    features: [
      'Gamification Engine: Logic for EXP calculation, automated daily tasks, and currency transactions',
      'Performance Optimization: Implemented node-cache to reduce DB load for high-traffic endpoints (Rankings, Hot Stories)',
      'Database Efficiency: Optimized SQL queries with Indexes and Fulltext Search for fast content retrieval',
      'Content Delivery APIs: Efficient endpoints for chapter pagination, reading history, and detailed metadata',
      'Security & Access: Fine-grained RBAC for Admins, Authors, and Users protected by JWT',
      'Interaction System: Backend logic for flexible handling of comments, ratings, and follow lists ',
    ],
    liveUrl: 'https://truyen-viet-hay.vercel.app/',
    githubUrl: 'https://github.com/quocbao201104/TruyenVietHay.git',
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
