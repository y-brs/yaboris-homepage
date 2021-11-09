import NextLink from "next/link"
import { Button, Box, Container, Heading, Image, List, ListItem, Link, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear  } from "../components/bio"
import { GridItem } from "../components/grid-item"
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5"

import thumbPost from "../public/images/contents/post.jpg"

const Page = () => {
  return (
    <>
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
          Worked at Google
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @github
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @twitter
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @instagram
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://discord.gg/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                discord
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={5}>
          <GridItem
            href="https://google.com"
            title="Lorem ipsum"
            thumbnail={thumbPost}
          >
            Lorem ipsum dolor sit amet
          </GridItem>
          <GridItem
            href="https://google.com"
            title="Lorem ipsum"
            thumbnail={thumbPost}
          >
            Lorem ipsum dolor sit amet
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={5}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
      </Container>
    </>
  )
}

export default Page
