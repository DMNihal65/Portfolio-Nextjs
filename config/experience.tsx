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
    position: 'Project Associate I - Software Developer',
    duration: 'March 2024 - Present',
    logo: {
      light: '/worked_at_logos/cmti.png',
      dark: '/worked_at_logos/cmti.png',
    },
    roles: [
      <>
        Led cross-functional teams of 5-6 developers delivering tailored software solutions for manufacturing clients.
      </>,
      <>
        Collaborated with lead Scientists on Industry 4.0 research initiatives, developing multiple sponsored projects across
        smart manufacturing domains.
      </>,
      <>
        Spearheaded an IoT-integrated MES implementation that increased production efficiency by 18% for a leading
        Indian manufacturer.
      </>,
      <>
        Architected AWS-based document and inventory management systems, reducing operational costs and minimizing
        production downtime.
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
        Web Development Intern at Comp-Soft Technology, contributing to a meaningful project supporting an NGO's
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
