import { Accordion, Box,  Container,  Stack,  Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import QuestionFAQ from './QuestionFAQ'


const Faq = () => {
  const FAQs=[
    {
      question:"What is My Tv+?",
      answer:"My TV+ is a streaming service from My. It features exclusive My Original shows and movies from some of the industry's top talent, with new premieres arriving each month.  Browse all of the available content on My TV+ inside the My TV app on the “My TV+” tab or here on."
    },
    {
      question:"What dose My Tv includes?",
      answer:"My TV+ includes My Original films and series—which are original shows and movies made exclusively for My.It also includes free access for anyone to watch Friday Night Baseball, provided through My TV+ in partnership with MLB (Major League Baseball). New shows and movies are being added to the streaming service often, so browse inside the My TV app or visit."
    },
    {
      question:"Where can I watch Apple TV+?",
      answer:"Apple TV+ is an exclusive streaming subscription available in the Apple TV app. You can find the Apple TV app on many of your favourite Apple devices. Plus, find the app on many smart TVs, streaming devices, game consoles and some select cable boxes."
    },
    {
      question:"Can I watch Apple TV+ on my phone?",
      answer:"Apple TV+ is a streaming service that lives inside the Apple TV app — an app that brings Apple TV+ together with other streaming service subscriptions that you add. You can find the Apple TV app on iPhone, iPad, Apple TV 4K or HD, plus on many streaming devices and smart TVs like Roku, Samsung, LG, Panasonic and more."
    },
    {
      question:"How to watch Apple TV+ on Android or Windows?",
      answer:"The easiest way to watch Apple TV+ on an Android phone or Windows device is to visit tv.apple.com. There, you can still sign in with an Apple ID, add Apple Original shows and movies to your Up Next watchlist and keep track of what you are watching."
    },
    {
      question:"What movies are on Apple TV+?",
      answer:"There are many movies to choose from on Apple TV+ and new Apple Original films are being added frequently. The best way to see what movies are on Apple TV+ is to browse the Apple TV+ tab inside the Apple TV app or here on tv.apple.com. You will find many award-winning films to choose from, like Academy Award-winner for Best Picture CODA or the critically-acclaimed The Tragedy of Macbeth. Or choose from hits like Greyhound, Swan Song, Wolfwalkers and more."
    },
    {
      question:"What can I watch on Apple TV+?",
      answer:"More Apple Original series are being added to the TV app frequently, so check back often to discover new TV shows on Apple TV+. Start by browsing in the Apple TV+ tab on the Apple TV app or here on tv.apple.com. You will find hits like the Emmy-winning Ted Lasso, critically-acclaimed The Morning Show and sci-fi epic Foundation, plus new and popular shows like Severance, Slow Horses and WeCrashed."
    },
    {
      question:"How do I get Apple TV+?",
      answer:"You can subscribe to Apple TV+ inside the Apple TV app on your mobile or living room device or on tv.apple.com. Your subscription to Apple TV+ will use the payment method associated with your Apple ID, which is your one sign-in for all things Apple. With one Apple account, it’s easy to manage your subscription in Settings on any device or on tv.apple.com."
    },
    {
      question:"Can I get Apple TV+ for free?",
      answer:"There are a few ways to try Apple TV+ for free. First, try 7 days of Apple TV+ for free by starting a trial in the Apple TV app on your iPhone, iPad, Apple TV 4K or HD, or on any streaming device. If you have recently purchased Apple hardware that includes a 12‑month, 6‑month, 3‑month or other complimentary free trial of Apple TV+, this offer will automatically appear in the Apple TV app when signed in with the Apple ID associated with your recent hardware purchase."
    },
    {
      question:"How do I cancel Apple TV+?",
      answer:"The easiest way to cancel an Apple TV+ subscription is to go to Settings on an Apple device like an iPhone. Open the app, choose your name, then select Subscriptions and choose Apple TV+. You can also manage your Apple TV+ subscription at tv.apple.com. Sign in and choose the account icon in the top right corner."
    },
    {
      question:"How do I share Apple TV+ with my family?",
      answer:"Sharing Apple TV+ through the Apple TV app uses Family Sharing, Apple’s system that helps you to share multiple Apple Services through your Apple ID. First, you need to set up Family Sharing on an Apple device, then you will be able to share Apple TV+ with your family group."
    },
    {
      question:"Is Apple TV+ accessible?",
      answer:"Apple TV+ is part of the Apple TV app, which includes many accessibility features — so you only have to focus on enjoying Apple Original shows and movies. All Apple Originals support Closed Captions and SDH (subtitles for the Deaf and Hard of Hearing) in addition to audio descriptions; plus the entire app supports VoiceOver, Apple’s built-in screenreader. Bold Text, Increase Contrast and Reduce Motion settings are also available. Subtitles are supported for 40+ languages for all Apple TV+ titles. Learn about more accessibility options in the Apple TV app."
    },
  ]

  return (
    <Box p={50} bg={useColorModeValue('blackAlpha.800', 'blackAlpha.800')}
                 color={useColorModeValue('white', 'white')}>
      <Text pb={5} textAlign={"center"} fontSize={["2xl","5xl","5xl"]}>Questions? & Answers</Text>
      <Container >
        <Accordion allowToggle>
            {
              FAQs.map(({question,answer})=>(
                <QuestionFAQ question={question} answer={answer} />
              ))
            }
        </Accordion>
    </Container>
<Box 
     
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 My TV+. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Faq
