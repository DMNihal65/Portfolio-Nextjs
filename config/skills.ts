import { IconType } from 'react-icons'
import {

  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
 
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
 
  SiVuedotjs,
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
  
  
} from 'react-icons/si'
import { BiLogoTailwindCss } from "react-icons/bi";

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
      icon: SiNodedotjs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Graphql (JS)',
      icon: SiGraphql,
    },
    
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'VueJS',
      icon: SiVuedotjs,
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
      icon: SiStyledcomponents,
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
      icon: BiLogoTailwindCss,
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
