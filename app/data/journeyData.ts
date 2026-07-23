export interface ExperienceItem {
  id: string
  role: string
  company: string
  location?: string
  link?: string
  period: string
  type: 'work' | 'education'
  description: string
  details: string[]
  skills?: string[]
  logo?: string
  coursework?: string[]
}

export interface CertificationItem {
  id: string
  title: string
  category: 'Coursera' | 'HackerRank' | 'Udemy'
  link: string
  img: string
}

export const workExperience: ExperienceItem[] = [
  {
    id: 'zylux',
    role: 'Full-Stack Developer',
    company: 'Zylux',
    location: 'Kathmandu, Nepal',
    period: 'Nov 2023 - Present',
    type: 'work',
    description: 'Architecting and engineering modern full-stack web applications, REST APIs, and responsive user interfaces.',
    details: [
      'Engineering high-performance web applications using React, TypeScript, Next.js, and Node.js.',
      'Building scalable API backend services, database architectures, and integrating modern cloud workflows.',
      'Collaborating with design and product teams to deliver seamless, production-ready digital products.'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Full-Stack Development', 'REST APIs']
  },
  {
    id: 'cloudfactory',
    role: 'Image and Data Analyst',
    company: 'Cloud Factory',
    location: 'Kathmandu, Nepal',
    link: 'https://www.cloudfactory.com/',
    period: 'Nov 2023 - May 2024',
    type: 'work',
    description: 'Utilized advanced image processing and data analysis techniques to extract actionable insights from complex datasets.',
    details: [
      'Utilized advanced image processing and data analysis techniques to extract actionable insights from complex datasets.',
      'Collaborated with cross-functional teams to improve data workflows and enhance visualization strategies.',
      'Implemented custom algorithms for image recognition and classification, improving processing efficiency.'
    ],
    skills: ['Python', 'SQL', 'Data Visualization', 'Pandas', 'Image Processing']
  },
  {
    id: 'icash',
    role: 'Laravel Developer Internship',
    company: 'iCash Nepal',
    location: 'Kathmandu, Nepal',
    link: 'https://www.facebook.com/icash.np/',
    period: 'May 2023 - Jun 2023',
    type: 'work',
    description: 'Assisted in developing and maintaining web applications using Laravel, enhancing functionality and backend performance.',
    details: [
      'Assisted in developing and maintaining web applications using Laravel, enhancing functionality and system performance.',
      'Collaborated with senior developers to troubleshoot and optimize backend systems for seamless user experiences.'
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript']
  },
  {
    id: 'weinspire',
    role: 'Researcher',
    company: 'We Inspire Nepal',
    location: 'Kathmandu, Nepal',
    link: 'https://weinspire.org.np/',
    period: 'Jun 2019 - Aug 2019',
    type: 'work',
    description: 'Led planning and execution of engagement initiatives and conducted trends research for public relations.',
    details: [
      'Led the planning and execution of successful events, developing innovative concepts and strategies to engage audiences.',
      'Conducted research to identify trends and opportunities, using insights to craft impactful event ideas and enhance attendee experiences.',
      'Managed all aspects of event coordination, from conceptualization to on-site execution, ensuring smooth operations and high satisfaction.'
    ],
    skills: ['Research', 'Event Management', 'Public Relations']
  }
]

export const educationHistory: ExperienceItem[] = [
  {
    id: 'herald',
    role: 'Bachelors in Information Technology',
    company: 'Herald College Kathmandu (University of Wolverhampton)',
    location: 'Kathmandu, Nepal',
    period: '2020 - 2024',
    type: 'education',
    logo: '/assets/img/education/Herald-College.png',
    description: 'Bachelors degree in IT focused on Algorithms, Modular Programming, Web Development, and Database Systems.',
    details: [
      'Algorithms and Data Structure',
      'Modular Programming',
      'Database Systems (SQL)',
      'Web & Backend Development',
      'System Architecture & Modeling'
    ],
    coursework: [
      'Algorithms and Data Structure',
      'Modular Programming',
      'Database Systems (SQL)',
      'Web & Backend Development',
      'System Architecture & Modeling'
    ],
    skills: ['Algorithms', 'SQL', 'Web Development', 'System Architecture']
  },
  {
    id: 'vsniketan',
    role: '+2 Major in Computer Science',
    company: 'VS Niketan Secondary School',
    location: 'Kathmandu, Nepal',
    period: '2018 - 2020',
    type: 'education',
    logo: '/assets/img/education/VS-Niketan.png',
    description: 'Higher secondary school major in Computer Science and Programming Fundamentals.',
    details: [
      'C++ language',
      'HTML, CSS and JS',
      'C Programming',
      'Q Basics',
      'Computer Principle'
    ],
    coursework: [
      'C++ language',
      'HTML, CSS and JS',
      'C Programming',
      'Q Basics',
      'Computer Principle'
    ],
    skills: ['C++', 'HTML/CSS', 'JavaScript', 'C Programming']
  }
]

export const certificationsData: CertificationItem[] = [
  {
    id: 'hackerrank-react',
    title: 'Frontend Developer (React)',
    category: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/6828d0daf2c2',
    img: '/assets/img/certification/HackerRank.png'
  },
  {
    id: 'udemy-css-js',
    title: 'CSS, Js and Bootstrap',
    category: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-6db6cff0-98ca-4679-a248-cb9c4db22cc8/',
    img: '/assets/img/certification/udemy.png'
  },
  {
    id: 'udemy-react-basic',
    title: 'React-Basic',
    category: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-bf888c85-29fe-4a57-b39c-0c5b16d0a950/',
    img: '/assets/img/certification/udemy.png'
  },
  {
    id: 'udemy-react-course',
    title: 'React Course',
    category: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-a2cf7e03-ae26-4640-885f-5b922fbcb7af/',
    img: '/assets/img/certification/udemy.png'
  },
  {
    id: 'coursera-illustrator',
    title: 'Adobe Illustrator',
    category: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/8YGAWBHWBFYY',
    img: '/assets/img/certification/corsera.png'
  },
  {
    id: 'coursera-image-classification',
    title: 'Basic Image Classification',
    category: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/5LSK7BJHACBV',
    img: '/assets/img/certification/corsera.png'
  },
  {
    id: 'coursera-aws-s3',
    title: 'AWS S3 Basics',
    category: 'Coursera',
    link: 'https://coursera.org/share/a49f7570c0cebf51c4bcc09f3e75f48e',
    img: '/assets/img/certification/corsera.png'
  },
  {
    id: 'coursera-figma',
    title: 'Figma',
    category: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/6VGSFJ3ZYPDJ',
    img: '/assets/img/certification/corsera.png'
  },
  {
    id: 'coursera-data-analysis',
    title: 'Data Analysis',
    category: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/VBDSHNDFQT2T',
    img: '/assets/img/certification/corsera.png'
  }
]
