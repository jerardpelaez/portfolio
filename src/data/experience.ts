export interface ExperienceEntry {
  role: string
  company: string
  location: string
  period: string
  startDate: string
  endDate: string | null
  isCurrent: boolean
  responsibilities: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Avvoka',
    location: 'London, England (Remote)',
    period: 'Jun 2025 – Present',
    startDate: '2025-06',
    endDate: null,
    isCurrent: true,
    responsibilities: [
      'Collaborate with a distributed engineering team to architect and deliver front-end features for an enterprise legal technology SaaS platform, using Vue.js and TypeScript within Agile sprints.',
      'Partner with QA engineers to implement integration tests and streamline developer tooling, reducing onboarding friction for new team members and improving deployment confidence.',
      'Work closely with UX/UI designers and backend engineers to translate Figma designs into accessible, high-performance components that meet enterprise standards.',
      'Coordinate with the product team to conduct performance audits and implement optimizations, improving page load times and Core Web Vitals scores.',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'CAPLINQ Corporation',
    location: 'Alabang, Metro Manila',
    period: 'Nov 2024 – Present',
    startDate: '2024-11',
    endDate: null,
    isCurrent: true,
    responsibilities: [
      'Stepped into a senior role, taking ownership of front-end architecture for the company\'s website and internal tools alongside a cross-functional team of designers, marketers, and backend developers.',
      'Championed integration testing practices within the engineering team and collaborated with DevOps to optimize the CI/CD pipeline, improving release reliability across the organization.',
      'Worked with product stakeholders to identify and reduce technical debt through regular codebase refactoring, improving long-term maintainability and developer velocity.',
      'Partnered with marketing and content teams to conduct performance testing, resulting in measurably faster load times and improved mobile responsiveness for end users.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'IT Americano Inc.',
    location: 'Makati, Metro Manila',
    period: 'Jul 2023 – Oct 2023',
    startDate: '2023-07',
    endDate: '2023-10',
    isCurrent: false,
    responsibilities: [
      'Joined a fast-paced team maintaining live casino gaming applications, collaborating with backend engineers and QA to diagnose and resolve critical production bugs affecting platform stability.',
      'Worked alongside senior developers to implement new gameplay features using Vue.js, TypeScript, LayaAir IDE, and FairyGUI, contributing to increased user engagement and session duration.',
      'Partnered with the localization team to resolve internationalization (i18n) and translation challenges, ensuring the platform remained accessible to a global, multilingual user base.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Cashbee Lending Services',
    location: 'Muntinlupa, Metro Manila',
    period: 'Jan 2023 – Jun 2023',
    startDate: '2023-01',
    endDate: '2023-06',
    isCurrent: false,
    responsibilities: [
      'Collaborated with UX/UI designers to translate mockups into pixel-perfect front-end code, working with backend engineers to integrate components with REST APIs for a fintech lending platform.',
      'Adopted Test-Driven Development (TDD) practices alongside the engineering team, writing comprehensive unit and integration tests to uphold shared code quality standards.',
      'Worked with mobile engineers to convert Vue.js web applications into cross-platform mobile apps using Quasar Framework, supporting deployment to both Android and iOS.',
      'Coordinated with distributed team members through Git Flow branching strategy, participating in code reviews and sprint ceremonies to keep releases on track.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Bizmates Philippines Inc.',
    location: 'Muntinlupa, Metro Manila',
    period: 'Jan 2020 – Dec 2022',
    startDate: '2020-01',
    endDate: '2022-12',
    isCurrent: false,
    responsibilities: [
      'Started my professional journey as part of a product engineering team, contributing clean, maintainable code to a large-scale codebase using modern ES6+ JavaScript standards.',
      'Participated in peer code reviews alongside experienced developers, both giving and receiving feedback that sharpened my skills and helped enforce team coding standards.',
      'Played an active role in Agile/Scrum ceremonies — sprint planning, daily standups, and retrospectives — collaborating with product managers, designers, and fellow developers.',
      'Partnered with UX/UI designers to transform complex designs into responsive, cross-browser-compatible front-end implementations that met client expectations.',
      'Worked closely with QA and fellow developers to identify and resolve production bugs, contributing to improved application stability and client satisfaction.',
    ],
  },
]
