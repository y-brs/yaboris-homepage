import { Container, Stack, Text, Heading } from "@chakra-ui/react"
import Layout from "../components/layouts/article"

const Contacts = () => (
  <Layout title="Contacts">
    <Container>
      <Heading as="h1" mt={3} mb={4}>
        Contacts
      </Heading>

      <Stack spacing={3} mb={5}>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text>
          Urabitur lectus justo, consequat non sem in, mattis luctus nisi.
        </Text>
        <Text>
          Vivamus quis laoreet leo, a varius nisl.
        </Text>
        <Text>
          Fusce a ipsum a odio feugiat facilisis.
        </Text>
      </Stack>
    </Container>
  </Layout>
)

export default Contacts
