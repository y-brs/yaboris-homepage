import NextLink from "next/link"
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

export const Title = ({ children }) => (
  <Box mt={3}>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <ChevronRightIcon ml={2}/>

    <Heading as="h1" my={5}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
