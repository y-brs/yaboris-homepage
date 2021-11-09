import { Container, Heading } from "@chakra-ui/react"
import Layout from "../components/layouts/article"

const Contacts = () => (
  <Layout title="Contacts">
    <Container>
      <Heading as="h1" mt={3} mb={4}>
        Contacts
      </Heading>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>urabitur lectus justo, consequat non sem in, mattis luctus nisi.</p>
      <p>Vivamus quis laoreet leo, a varius nisl.</p>
      <p>Fusce a ipsum a odio feugiat facilisis.</p>
    </Container>
  </Layout>
)

export default Contacts
