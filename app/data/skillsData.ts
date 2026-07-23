export interface SkillCategory {
  title: string
  skills: { name: string; level?: string }[]
}

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Frontend & Core Web',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 & CSS3' },
      { name: 'Bootstrap CSS' },
      { name: 'Vue.js' }
    ]
  },
  {
    title: 'Backend & CMS Systems',
    skills: [
      { name: 'PHP' },
      { name: 'WordPress' },
      { name: 'Laravel' },
      { name: 'Django' },
      { name: 'Python' },
      { name: 'MySQL' },
      { name: 'SQL & Databases' },
      { name: 'REST APIs' }
    ]
  },
  {
    title: 'Data & Analytical Tools',
    skills: [
      { name: 'Image Processing' },
      { name: 'Data Analysis' },
      { name: 'Pandas & Python Libraries' },
      { name: 'Data Visualization' },
      { name: 'AWS S3 Basics' }
    ]
  },
  {
    title: 'Design & Developer Tools',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Figma' },
      { name: 'Adobe Illustrator' },
      { name: 'Canva' },
      { name: 'VS Code' }
    ]
  }
]
