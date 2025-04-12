import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '80%', xl: '70%' }}
      height="100%"
      spacing={{ base: 8, md: 10, xl: 12 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap={{ base: 8, md: 10, xl: 12 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={1} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="AI MOCK INTERVIEW"
            src="/AiInterview.PNG"
            description="An AI-powered web application to help job seekers prepare for interviews through tailored simulations. Features include AI-generated questions, real-time feedback, personalized improvement suggestions, audio recording, and AI-driven response analysis. Built with Next.js, Drizzle ORM, Gemini AI, PostgreSQL, TailwindCSS, shadcn, and Vercel."
            height={{ base: '200px', md: '250px', '2xl': '300px' }}
            ctaUrl="https://ai-interview-umber.vercel.app/"
            objectPosition="center center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={1} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="GSAP Animations"
            description="A collection of various animations including scroll trigger animations, preloaders, and more. Built using HTML, CSS, JavaScript, React, Framer Motion, and GSAP. Features stunning 3D parallax effects and smooth scroll implementations."
            src="/Arc.PNG"
            videoSrc="/Scroll Trigger 3D Fun - Brave 2025-04-06 22-51-18.mp4"
            fallbackSrc="/Arc.PNG"
            height={{ base: '200px', md: '250px', '2xl': '300px' }}
            ctaUrl="https://dmnihal65.github.io/ScrollTrigger3D/"
            objectPosition="center center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={1} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="CODESNIPPET MASTER"
            description="A SaaS platform for efficient code snippet management to boost developer productivity. Features AI-powered code generation, optimization, auto-documentation, advanced search, filtering, user authentication, subscription management, and social features. Built with Next.js, Drizzle ORM, Gemini AI, PostgreSQL, TailwindCSS, shadcn, and Vercel."
            src="/CodeSnipz.PNG"
            height={{ base: '200px', md: '250px', '2xl': '300px' }}
            ctaUrl="https://code-snipz-plum.vercel.app/dashboard"
            objectPosition="center center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="TMH Layla EC"
            description="A Japanese Semi-conductor e-commerce made at my old place at IVP. I was working with backend using ASP.NET MVC"
            src="/works/tmh.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.layla-ec.com/"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
