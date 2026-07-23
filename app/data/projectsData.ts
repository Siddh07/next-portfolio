export interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  tech: string[]
  liveUrl: string
  repoUrl?: string
  image: string
  color: string
  glowColor: string
  category: 'Front-End' | 'Full-Stack' | 'Web' | 'Mobile' | 'Data Analysis'
  featured?: boolean
  tags?: string[]
}

export const projectsData: Project[] = [
  {
    id: 'portfolio-v2',
    title: 'Personal Portfolio Web App',
    description: 'A modern, responsive personal developer portfolio showcasing web engineering projects, certifications, and data analytics achievements.',
    fullDescription: 'Designed and built with React, TypeScript, and Tailwind CSS. Features dynamic project filtering, online credential verifications, animated timeline layouts, and interactive dark mode spotlight aesthetics.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://portfolio-two-phi-qpwpkz3ljm.vercel.app',
    repoUrl: 'https://github.com/Siddh07/Portfolio',
    image: '/assets/img/profile.png',
    color: 'from-emerald-600 to-teal-500',
    glowColor: '#10b981',
    category: 'Front-End',
    featured: true,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio']
  },
  {
    id: 'kaths',
    title: 'Kaths Web Platform',
    description: 'A modern web application built with TypeScript and modular architecture for data-driven service management.',
    fullDescription: 'Engineered using TypeScript, Node.js, and modern frontend tools. Implements robust data structuring, modular code organization, and responsive layout designs.',
    tech: ['TypeScript', 'Node.js', 'Web Application', 'Tailwind CSS'],
    liveUrl: 'https://github.com/Siddh07/Kaths',
    repoUrl: 'https://github.com/Siddh07/Kaths',
    image: '/assets/img/profile.png',
    color: 'from-blue-600 to-cyan-500',
    glowColor: '#2563eb',
    category: 'Full-Stack',
    featured: true,
    tags: ['TypeScript', 'Node.js', 'Full-Stack']
  },
  {
    id: 'siddh07-app',
    title: 'Siddh07 Web Systems Hub',
    description: 'Interactive web application system showcasing custom web utility tools, API services, and backend integrations.',
    fullDescription: 'Custom web portal developed to explore interactive UI components, API integrations, and full-stack deployment workflows.',
    tech: ['React', 'JavaScript', 'HTML5/CSS3', 'REST API'],
    liveUrl: 'https://github.com/Siddh07/Siddh07',
    repoUrl: 'https://github.com/Siddh07/Siddh07',
    image: '/assets/img/profile.png',
    color: 'from-purple-600 to-indigo-500',
    glowColor: '#8b5cf6',
    category: 'Web',
    featured: true,
    tags: ['React', 'Web System', 'REST API']
  },
  {
    id: 'image-data-analyzer',
    title: 'Image & Data Analysis Pipeline',
    description: 'Advanced data processing pipeline built at Cloud Factory for computer vision dataset classification and analytics.',
    fullDescription: 'Utilizes Python, SQL, Pandas, and custom image processing algorithms to analyze complex image datasets, improving classification throughput by 20%.',
    tech: ['Python', 'SQL', 'Pandas', 'Data Visualization', 'Image Processing'],
    liveUrl: 'https://www.cloudfactory.com/',
    image: '/assets/img/profile.png',
    color: 'from-amber-500 to-orange-500',
    glowColor: '#f59e0b',
    category: 'Data Analysis',
    featured: true,
    tags: ['Python', 'Data Analytics', 'Image Processing']
  },
  {
    id: 'icash-laravel',
    title: 'iCash Financial Web Portal',
    description: 'Laravel-based backend web application for financial transaction workflows, MySQL optimization, and API endpoints.',
    fullDescription: 'Assisted in building secure financial transaction management modules, optimizing SQL query execution speeds, and creating responsive web views.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://www.facebook.com/icash.np/',
    image: '/assets/img/profile.png',
    color: 'from-rose-600 to-red-500',
    glowColor: '#ef4444',
    category: 'Full-Stack',
    featured: false,
    tags: ['Laravel', 'PHP', 'MySQL', 'Backend']
  }
]
