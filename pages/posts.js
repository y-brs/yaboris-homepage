import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item"

import thumbPostFirst from "../public/images/contents/post.jpg"

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h1" mt={3} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            thumbnail={thumbPostFirst}
            href="https://google.com/"
          />
          <GridItem
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            thumbnail={thumbPostFirst}
            href="https://google.com/"
          />
        </SimpleGrid>
      </Section>

      <Divider my={10} />

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            thumbnail={thumbPostFirst}
            href="https://google.com/"
          />
          <GridItem
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            thumbnail={thumbPostFirst}
            href="https://google.com/"
          />
        </SimpleGrid>
      </Section>

      <Divider my={10} />

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            thumbnail={thumbPostFirst}
            href="https://google.com/"
          />
          <GridItem
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            thumbnail={thumbPostFirst}
            href="https://google.com/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
