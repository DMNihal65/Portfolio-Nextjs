import { Link } from '@chakra-ui/react'

export type Company = 'CMTI1' | 'CMTI2' | 'CompSoft'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  CMTI1: {
    name: 'Central Manufacturing Technology Institute',
    longName: 'Central Manufacturing Technology Institute',
    url: '',
    position: 'Full Stack Developer',
    duration: 'March 2024 - Present',
    logo: {
      light: '/worked_at_logos/cmti.png',
      dark: '/worked_at_logos/cmti.png',
    },
    roles: [
        <>
        Led a team of 4 members in the Toyota Machine Maintenance project, utilizing Vue.js for the frontend and FastAPI
        for the backend.
        </>,
        <>
           Implemented PostgreSQL and TimescaleDB for data storage and retrieval.
        </>,
     
        <>
         Integrated MongoDB and MTLINKI for real-time data processing and visualization.
        </>,
       
        <>
          Designed and developed a user-friendly dashboard for the maintenance section of the Toyota engine manufacturing
        factory, providing real-time data dashboards and analytics.
        </>
      
      
    ],
  },
  CMTI2: {
    name: 'Central Manufacturing Technology Institute',
    longName: 'Central Manufacturing Technology Institute',
    url: '',
    position: 'Graduate Apprentice',
    duration: 'July 2023 - March 2024',
    logo: {
      light: '/worked_at_logos/cmti.png',
      dark: '/worked_at_logos/cmti.png',
    },
    roles: [
      <>
        Developing cutting-edge dashboards and websites with the latest web tech, enhancing data-driven decisions, and
        boosting online engagement by 15 percent.
        </>,
        <>  Collaborated with a team of 4 to create intuitive dashboards, improving data-driven decision-making by 20 Percent.</>,
        <>  Designed and integrated IoT solutions with sensors and data analytics, increasing process optimization efficiency
        by 10 percent.</>
      
     
    ],
  },
  CompSoft: {
    name: 'Comp-Soft Technology',
    longName: 'Comp-Soft Technology',
    url: '',
    position: 'Web Design Intern',
    duration: 'May 2022 - June 2022',
    logo: {
      light: '/worked_at_logos/csg.webp',
      dark: '/worked_at_logos/csg.webp',
    },
    roles: [
      <>
        Web Development Intern at Comp-Soft Technology, contributing to a meaningful project supporting an NGO’s
        green initiative. </>,
        <>
        Responsible for developing a website connecting plant and nature enthusiasts, enabling them to
        exchange, sell, or donate plants and seeds.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.CMTI1,
  Experiences.CMTI2,
  Experiences.CompSoft,
]
