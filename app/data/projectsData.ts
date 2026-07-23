export interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  tech: string[]
  liveUrl?: string
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
    description: 'Modern developer portfolio showcasing web engineering projects, certifications, and software development achievements.',
    fullDescription: 'Designed and built with Next.js, React, TypeScript, and Tailwind CSS. Features dynamic project showcases, responsive dark mode spotlight aesthetics, interactive timeline layouts, and seamless GitHub integrations.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://siddhantshrestha.com.np',
    repoUrl: 'https://github.com/Siddh07/next-portfolio',
    image: '/assets/img/hero/profile.png',
    color: 'from-emerald-600 to-teal-500',
    glowColor: '#10b981',
    category: 'Full-Stack',
    featured: true,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'kaths',
    title: 'Kaths Web Platform',
    description: 'Modular TypeScript web platform built for data-driven service workflows and scalable component architecture.',
    fullDescription: 'Engineered using TypeScript, Node.js, and modern frontend tools. Implements robust data structuring, modular code organization, and responsive layout designs.',
    tech: ['TypeScript', 'Node.js', 'Web Platform', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Siddh07/Kaths',
    image: '/assets/img/hero/profile.png',
    color: 'from-blue-600 to-cyan-500',
    glowColor: '#2563eb',
    category: 'Full-Stack',
    featured: true,
    tags: ['TypeScript', 'Node.js', 'Full-Stack']
  },
  {
    id: 'wedding-invitation-v2',
    title: 'Wedding Invitation V.2',
    description: 'Interactive, high-fidelity digital wedding invitation web application featuring custom micro-animations and responsive UX.',
    fullDescription: 'Crafted using React, Next.js, and Tailwind CSS. Provides an elegant digital RSVP user experience with fluid animations and responsive mobile layouts.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://wedding-invitation-v-2.vercel.app',
    repoUrl: 'https://github.com/Siddh07/Wedding-Invitation-V.2',
    image: '/assets/img/hero/profile.png',
    color: 'from-pink-600 to-rose-500',
    glowColor: '#ec4899',
    category: 'Front-End',
    featured: true,
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'fullstack-taskmaster',
    title: 'FullStack TaskMaster',
    description: 'Full-stack task management system with real-time workflow tracking, state persistence, and interactive user dashboards.',
    fullDescription: 'Developed with React, TypeScript, Node.js, and Express. Features full CRUD task workflows, priority categorizations, responsive dark-mode styling, and backend API integration.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://full-stack-task-master.vercel.app',
    repoUrl: 'https://github.com/Siddh07/FullStack-TaskMaster',
    image: '/assets/img/hero/profile.png',
    color: 'from-purple-600 to-indigo-500',
    glowColor: '#8b5cf6',
    category: 'Full-Stack',
    featured: true,
    tags: ['React', 'TypeScript', 'Node.js', 'Full-Stack']
  },
  {
    id: 'next-weather-app',
    title: 'Next.js Weather App',
    description: 'Real-time weather forecasting web application consuming open weather telemetry REST APIs.',
    fullDescription: 'Built with Next.js, React, and TypeScript. Provides dynamic location searching, temperature analytics, atmospheric condition indicators, and responsive UI card components.',
    tech: ['Next.js', 'React', 'TypeScript', 'REST API', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Siddh07/next-weatherApp',
    image: '/assets/img/hero/profile.png',
    color: 'from-cyan-600 to-blue-500',
    glowColor: '#06b6d4',
    category: 'Web',
    featured: true,
    tags: ['Next.js', 'REST API', 'TypeScript']
  },
  {
    id: 'ecommerce-store-nextjs',
    title: 'Next.js E-Commerce Store',
    description: 'Modern online storefront with dynamic product catalog filtering, cart management, and responsive product views.',
    fullDescription: 'Engineered using Next.js App Router, React, and TypeScript. Features product filtering, shopping cart state management, responsive grid layouts, and clean checkout UI flow.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Siddh07/ecommerce-store-nextjs',
    image: '/assets/img/hero/profile.png',
    color: 'from-emerald-500 to-green-600',
    glowColor: '#10b981',
    category: 'Full-Stack',
    featured: true,
    tags: ['Next.js', 'E-Commerce', 'TypeScript']
  },
  {
    id: 'ecommerce-platform',
    title: 'Ecommerce Platform',
    description: 'Full-stack web e-commerce repository with product catalog management and web transaction logic.',
    fullDescription: 'Custom web e-commerce application built with JavaScript and Node.js. Demonstrates product data management, shopping cart state handling, and modular component architecture.',
    tech: ['JavaScript', 'HTML5/CSS3', 'Node.js', 'Web Application'],
    repoUrl: 'https://github.com/Siddh07/Ecommerce',
    image: '/assets/img/hero/profile.png',
    color: 'from-amber-500 to-orange-500',
    glowColor: '#f59e0b',
    category: 'Web',
    featured: false,
    tags: ['JavaScript', 'E-Commerce', 'Node.js']
  },
  {
    id: 'school-template',
    title: 'School Website Template',
    description: 'Clean institutional website template with responsive layouts for academic programs, news notices, and contact info.',
    fullDescription: 'Designed and deployed on GitHub Pages. Features accessible HTML5 semantic structure, custom CSS styling, smooth navigation, and institutional informational sections.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    liveUrl: 'https://pujanjoci.github.io/school-template/',
    repoUrl: 'https://github.com/Siddh07/School-template',
    image: '/assets/img/hero/profile.png',
    color: 'from-teal-600 to-cyan-500',
    glowColor: '#14b8a6',
    category: 'Front-End',
    featured: true,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Front-End']
  }
]
