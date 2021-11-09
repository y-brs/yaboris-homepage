import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Heading, Center } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"

const Work = () => (
  <Layout title="Project 1">
    <Container>
      <Title>
        Project 1 <Badge>2016–2021</Badge>
      </Title>
      <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus justo, consequat non sem in, mattis luctus nisi. Vivamus quis laoreet leo, a varius nisl. Fusce a ipsum a odio feugiat facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras tincidunt molestie dolor vitae luctus. Donec turpis ante, faucibus in elit sed, viverra sodales libero. Morbi ornare, leo sit amet scelerisque pharetra, augue eros euismod felis, at dignissim ligula purus nec ex. Nulla vel nunc vestibulum, faucibus ipsum eu, tincidunt mauris. Vivamus ut dui molestie, pellentesque nulla eget, rutrum eros. Nullam faucibus felis eu eros congue, convallis blandit ipsum faucibus.
      </P>
      <P>
        Donec convallis tellus vitae ligula semper dignissim nec vel nibh.
      </P>
      <List my={5}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://google.com">
            Donec convallis tellus vitae ligula
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Objective-C, PHP, MongoDB</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={5}>
        <ListItem>
          <Link href="http://google.com">
            <Badge mr={2}>Link 1</Badge>
            Donec convallis tellus vitae ligula
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://google.com">
            <Badge mr={2}>Link 2</Badge>
            Donec convallis tellus vitae ligula Donec convallis tellus
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://google.com">
            <Badge mr={2}>Link 3</Badge>
            Donec convallis tellus
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/project_01.png" alt="project" />
        <WorkImage src="/images/works/project_02.png" alt="project" />
      </SimpleGrid>

      <WorkImage src="/images/works/project_03.png" alt="project" />
      <WorkImage src="/images/works/project_04.png" alt="project" />
    </Container>
  </Layout>
)

export default Work
