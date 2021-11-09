import NextLink from "next/link"
import { Button, Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear  } from "../components/bio"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Town!
      </Box>

      <Box display={{md: "flex"}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Name Surname
          </Heading>

          <p>Full-stack developer ( Frontend / Backend / UX Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/userpic.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>1984</BioYear>
          Born in Town, Country
        </BioSection>

        <BioSection>
          <BioYear>2005</BioYear>
          Completed the MAsters&apos;s Program in the Graduate School of Information Science at IT Institute
        </BioSection>

        <BioSection>
          <BioYear>2005</BioYear>
          Worked at Google Ireland
        </BioSection>

        <BioSection>
          <BioYear>2010 to present</BioYear>
          Works as freelance
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>

        <Paragraph>
          Art, Misic, Drawing, Cycling, Playing Drums, Photography, Leica, Running.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
