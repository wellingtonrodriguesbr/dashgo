import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitted}
        >
          Acessar
        </Button>
      </Flex>
    </Flex>
  );
}
