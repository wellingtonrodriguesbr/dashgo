import { Text } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard" passHref>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        display="flex"
        letterSpacing="tight"
        w="64"
        cursor="pointer"
      >
        Dashgo
        <Text color="pink.500">.</Text>
      </Text>
    </Link>
  );
}
