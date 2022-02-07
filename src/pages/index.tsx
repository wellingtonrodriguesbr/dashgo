import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Heading as="h1" size="3xl" display="flex" mb={6}>
        Dashgo
        <Text color="pink.500">.</Text>
      </Heading>
      <Flex
        as="form"
        w="100%"
        maxWidth={460}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>
        <Button type="submit" mt={6} colorScheme="pink" size="lg">
          Acessar
        </Button>
      </Flex>
    </Flex>
  );
}
