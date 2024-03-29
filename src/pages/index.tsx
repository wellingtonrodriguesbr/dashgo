import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
});

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login | Dashgo.</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        px={4}
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
          p={8}
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
            <Input
              type="email"
              name="email"
              label="E-mail"
              error={errors.email}
              {...register("email")}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              error={errors.password}
              {...register("password")}
            />
          </Stack>
          <Button
            type="submit"
            mt={6}
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Acessar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
