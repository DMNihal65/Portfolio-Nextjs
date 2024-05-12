import React from 'react'
import { MacbookScroll } from './components/MacbookScroll'
import { Gemini } from './components/Gemini'
// import { Card } from './components/Card'
import { Sparkles } from './components/Sparkles'
import { ColorCard } from './components/ColorCard'
import { SliderDemo } from './components/Slider'
import { HeroParallaxDemo } from './components/HeroParallaxDemo'
import { WavyBackgroundDemo } from './components/WavyBackgroundDemo'
import { GlowingStarsDemo } from './components/GlowingStarsDemo'
import { TextRevealCardDemo } from './components/TextRevealCardDemo'
import { EvervaultCardDemo } from './components/EverVaultCardDemo'
import { AnimatedTooltipDemo } from './components/AnimatedTooltipDemo'
import { FollowingPointerDemo } from './components/FollowingPointerDemo'
import { SVGMaskEffectDemo } from './components/SVGMaskEffectDemo'
import { AnimatedPinDemo } from './components/AnimatedPinDemo'
// import { ParallaxScrollSecondDemo } from './components/ParallaxScrollSecondDemo'
import { TextGenerateEffectDemo } from './components/TextGenerateEffectDemo'
import { CardStackDemo } from './components/CardStackDemo'
import { CardHoverDemo } from './components/CardHoverDemo'
import { StickyScrollDemo } from './components/StickyScrollDemo'
import { LayoutGridDemo } from './components/LayoutGridDemo'
import { TabsDemo } from './components/TabsDemo'
import { TypewriterEffectDemo } from './components/TypeWriterEffectDemo'
import { BackgroundBoxesDemo } from './components/BackgroundBoxesDemo'
import { AuroraBackgroundDemo } from './components/AuroraBackground'
import { HeroHighlightDemo } from './components/HeroSection'
import { NavbarDemo } from './components/Navbar'
import { LampDemo } from './components/Lamp'
import  GridBackgroundDemo2  from './components/GridBackground'
import  {ExperienceSection}  from './components/Tracing'
import  {MeteorsDemo}  from './components/Metors'
import  {Projects}  from './components/Projects'
import  {TabsDemo2}  from './components/Projects2'
import  {SpotlightPreview}  from './components/AboutMe'
import  {AboutMeSection}  from './components/AboutMe2'
import  {Card}  from './components/Card'
import  {ParallaxScrollSecondDemo}  from './components/Graphics'
import  ContactPage  from './components/ContactMe2'


const Page = () => {
  return (
    <>
      <NavbarDemo />
      {/* <SpotlightPreview /> */}
      
      
      <HeroHighlightDemo />
     
      {/* <Card /> */}
      <AboutMeSection />

      
      
      <GridBackgroundDemo2 />
     
      <ExperienceSection />
      {/* <ExperienceSection /> */}
      {/* <MeteorsDemo /> */}
      <LampDemo />
      {/* <AnimatedPinDemo
  title="/ui.aceternity.com"
  href="https://twitter.com/mannupaaji"
  content="Customizable Tailwind CSS and Framer Motion Components."
  // imageUrl="@/public/rocket.png"
/> */}
      
      
      {/* <HeroParallaxDemo /> */}
      {/* <Projects /> */}
      <TabsDemo2 />
      <ParallaxScrollSecondDemo />
      <ContactPage />
      {/* <LampDemo /> */}

      
    </>
  )
}

export default Page
