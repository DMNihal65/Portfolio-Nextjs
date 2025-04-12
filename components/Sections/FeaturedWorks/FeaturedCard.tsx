import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Skeleton,
  Text,
  SimpleGrid,
  Button,
  Container,
  Stack,
  useColorModeValue,
  AspectRatio,
  VStack,
  Heading,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { easing, DURATIONS } from 'config/animations'
import React, { useState, memo } from 'react'

export type FeaturedCardProps = {
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  isMobile?: boolean
  videoSrc?: string
  fallbackSrc?: string
}

const variants = {
  normal: {
    opacity: 1,
  },
  hover: {
    scale: 1.02,
    boxShadow: 'xl',
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.99,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const MotionBox = motion(Box)
const MotionImage = motion(Image)

interface MediaDisplayProps {
  title: string
  src: string
  videoSrc?: string
  fallbackSrc?: string
  objectPosition?: string
}

const MediaDisplayComponent = (
  { title, src, videoSrc, fallbackSrc, objectPosition }: MediaDisplayProps
) => {
  const [useFallbackImage, setUseFallbackImage] = useState(false)
  const finalFallbackSrc = fallbackSrc || src

  const mediaStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: objectPosition || 'center center',
    zIndex: 1,
    transition: 'transform 0.4s ease-out',
  }

  if (videoSrc && !useFallbackImage) {
    return (
      <motion.video
        key={'vid-' + videoSrc}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setUseFallbackImage(true)}
        style={mediaStyle}
      />
    )
  }

  return (
    <motion.img
      key={'img-' + (useFallbackImage ? finalFallbackSrc : src)}
      src={useFallbackImage ? finalFallbackSrc : src}
      alt={title}
      loading="lazy"
      style={mediaStyle}
    />
  )
}
const MediaDisplay = memo(MediaDisplayComponent)
MediaDisplay.displayName = 'MediaDisplay'

interface ProjectDescriptionProps {
  idx: number
  title: string
  description: string
  ctaUrl: string
}

const ProjectDescriptionComponent = (
  { idx, title, description, ctaUrl }: ProjectDescriptionProps
) => {
  const bgGradient = useColorModeValue(
    'linear(to-t, blackAlpha.900 25%, blackAlpha.700 65%, transparent 100%)',
    'linear(to-t, blackAlpha.900 25%, blackAlpha.800 65%, transparent 100%)'
  )

  return (
    <VStack
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      bgGradient={bgGradient}
      zIndex={2}
      padding={{ base: 3, sm: 4, md: 5, lg: 6 }}
      spacing={{ base: 1.5, md: 2 }}
      alignItems="flex-start"
      width="100%"
      transition="background 0.3s ease-in-out"
    >
      <Heading
        as="h3"
        size="md"
        fontSize={{ base: '16px', md: '20px' }}
        color="white"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        <Text
          as="span"
          fontSize={{ base: 'xs', md: 'sm' }}
          color="whiteAlpha.600"
          mr={2}
          fontWeight="normal"
        >
          #{String(idx).padStart(2, '0')}
        </Text>
        {title}
      </Heading>
      <Text
        fontSize={{ base: 'xs', md: 'sm' }}
        color="whiteAlpha.800"
        noOfLines={{ base: 2, md: 3 }}
        lineHeight="short"
        flexGrow={1}
        minHeight={{ base: '2.2em', md: '3.3em' }}
      >
        {description}
      </Text>
      <Button
        size="sm"
        variant="solid"
        bg="whiteAlpha.200"
        color="white"
        borderColor="whiteAlpha.400"
        borderWidth="1px"
        backdropFilter="blur(8px)"
        px={4}
        py={2}
        fontSize={{ base: 'xs', md: 'sm' }}
        fontWeight="medium"
        letterSpacing="wide"
        borderRadius="md"
        as="a"
        href={ctaUrl}
        rel="noreferrer"
        target="_blank"
        mt={{ base: 2, md: 3 }}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'whiteAlpha.300',
          transform: 'translateX(-100%)',
          transition: 'transform 0.3s ease-out',
        }}
        _hover={{
          borderColor: 'white',
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          _before: {
            transform: 'translateX(0)',
          }
        }}
        _active={{
          transform: 'translateY(0)',
        }}
        textTransform="uppercase"
      >
        View Project
      </Button>
    </VStack>
  )
}
const ProjectDescription = memo(ProjectDescriptionComponent)
ProjectDescription.displayName = 'ProjectDescription'

const FeaturedCardComponent = (
  {
    idx,
    src,
    title,
    description,
    objectPosition,
    ctaUrl,
    videoSrc,
    fallbackSrc,
  }: FeaturedCardProps
) => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const borderRadius = 'lg'

  return (
    <MotionBox
      as="article"
      position="relative"
      borderRadius={borderRadius}
      overflow="hidden"
      bg={bg}
      initial="normal"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      boxShadow="lg"
      minHeight={{ base: '300px', sm: '350px', md: '400px' }}
      _hover={{
        '.media-bg video, .media-bg img': {
          transform: 'scale(1.08)',
        },
      }}
      className={styles.featureCard}
    >
      <Box
        className="media-bg"
        position="absolute"
        inset={0}
        zIndex={1}
        overflow="hidden"
        borderRadius={borderRadius}
      >
        <MediaDisplay
          src={src}
          videoSrc={videoSrc}
          fallbackSrc={fallbackSrc}
          title={title}
          objectPosition={objectPosition}
        />
      </Box>

      <ProjectDescription
        idx={idx}
        title={title}
        description={description}
        ctaUrl={ctaUrl}
      />
    </MotionBox>
  )
}

const FeaturedCard = memo(FeaturedCardComponent)
FeaturedCard.displayName = 'FeaturedCard'

export default FeaturedCard
