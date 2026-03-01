import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    name: 'TruyenVietHay – Online Story Reading Platform',
    description: 'A full-feature story platform with gamification and high-performance caching.',
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
    githubUrl: 'https://github.com/quocbao201104/TruyenVietHay.git'
  },
  
  {
  id: '2',
  name: 'Generic Content Ingestion Crawler (Node.js)',
  description: 'A sequential crawler for ingesting and normalizing paginated content.',
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
