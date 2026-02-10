export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  codeUrl?: string
  featured?: boolean
}

export const projects: Omit<Project, 'image'>[] = [
  {
    id: '1',
    title: 'GitTap',
    description: 'Contributed to a job recruitment platform connecting IT professionals with opportunities in Japan. Collaborated with the engineering team on advanced job search, filtering, and responsive interface features.',
    tags: ['Vue.js', 'Vuetify', 'TypeScript'],
    demoUrl: 'https://www.gittap.jp/',
    featured: true
  },
  {
    id: '2',
    title: 'Enterprise Document Platform',
    description: 'Worked with a cross-functional team on a document automation platform for legal workflows. Developed template management, clause libraries, and real-time collaboration features.',
    tags: ['Vue.js', 'TypeScript', 'REST APIs'],
    demoUrl: 'https://avvoka.com/',
    featured: true
  },
  {
    id: '3',
    title: 'E-Commerce Product Catalog',
    description: 'Collaborated on a B2B chemical product catalog with the development team. Built advanced search, filtering, technical specifications, and quote request workflows.',
    tags: ['Nuxt.js', 'Vuetify', 'TypeScript'],
    demoUrl: 'https://www.caplinq.com/',
    featured: false
  },
  {
    id: '4',
    title: 'Live Gaming Platform',
    description: 'Part of the frontend team delivering a real-time multiplayer gaming application. Implemented smooth UX, WebSocket-based live updates, and interactive features.',
    tags: ['Vue.js', 'TypeScript', 'WebSocket'],
    demoUrl: 'https://www.og6666.com/',
    featured: false
  },
  {
    id: '5',
    title: 'Financial Services Dashboard',
    description: 'Contributed to a lending management system within an Agile team. Developed loan processing workflows, payment tracking, customer management, and analytics dashboards.',
    tags: ['Vue.js', 'REST APIs', 'Chart.js'],
    demoUrl: 'https://cashbee.ph/',
    featured: false
  },
  {
    id: '6',
    title: 'Corporate Learning Platform',
    description: 'Worked with a product team on an online education platform for business professionals. Built video lesson features, progress tracking, and certification management.',
    tags: ['Vue.js', 'JavaScript', 'Agile'],
    demoUrl: 'https://www.bizmates.ph/',
    featured: false
  }
]
