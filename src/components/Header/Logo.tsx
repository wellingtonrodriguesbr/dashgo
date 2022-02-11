import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      display="flex"
      letterSpacing="tight"
      w="64"
    >
      Dashgo
      <Text color="pink.500">.</Text>
    </Text>
  );
}
