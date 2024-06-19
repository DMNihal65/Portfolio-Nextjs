import { memo, useState } from 'react';
import { Heading, Text, Stack, Link, Icon, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri';

const rimuruVariant = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
};

const GetInTouch = () => {
  const [ref, inView] = useInView();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = { name, email, message };
  
    try {
      const response = await fetch('/api/email-sender', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{ fontVariantCaps: 'small-caps' }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (
              ⁀ᗢ⁀ )
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        I do reply to messages as long
        as my human interaction battery lasts. Coding, work, movies or even weeb
        stuff, anything is cool. So feel free to message me on any of my social
        media or shoot me an{' '}
        <Link href="mailto:Nihaldm65@gmail.com" target="_blank" rel="noreferrer">
          email
        </Link>
        .
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" >
          Send Message
        </Button>
      </form>

      <Box
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/DMNihal65"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            DM Nihal <Icon as={RiCopyleftLine} /> 2024<br />
            <>Inspired from KL Lawingco</>
          </Text>
        </Link>
      </Box>
    </Stack>
  );
}

export default memo(GetInTouch);
