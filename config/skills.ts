import { IconType } from 'react-icons'
import {

  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiGraphql,
 
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
 
  SiVueDotJs,
  SiDocker,
  
  SiGitlab,
  SiPostgresql,

  SiMysql,
  SiMongodb,
 
  SiMaterialdesign,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  
  SiMicrosoft,
  SiElectron,
  SiFirebase,
  SiApachekafka,
  SiAmazonaws,
  SiPython,
  SiTailwindcss,
  
} from 'react-icons/si'

import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'


export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    
    {
      name: 'Node',
      icon: SiNodeDotJs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'FastAPI (Python)',
      icon: SiPython,
    },
    // {
    //   name: 'Typescript',
    //   icon: SiTypescript,
    // },
    
    
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    // {
    //   name: 'NextJS',
    //   icon: SiNextDotJs,
    // },
    // {
    //   name: 'Redux',
    //   icon: SiRedux,
    // },
    {
      name: 'VueJS',
      icon: SiVueDotJs,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Apachekafka',
      icon: SiApachekafka,
    },
    
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'AWS',
      icon: SiAmazonaws,
    },
    
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
   
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialdesign,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'Tailwind Css',
      icon: SiTailwindcss,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
  ],
  
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: SiMicrosoft,
    },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
