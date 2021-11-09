import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

import thumbProject from "../public/images/works/project.png"

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h1" mt={3} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="project"
            title="Project"
            thumbnail={thumbProject}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="project"
            title="Project"
            thumbnail={thumbProject}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="project"
            title="Project"
            thumbnail={thumbProject}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="project"
            title="Project"
            thumbnail={thumbProject}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
