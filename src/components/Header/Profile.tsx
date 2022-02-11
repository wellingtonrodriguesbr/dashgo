import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Wellington Rodrigues</Text>
        <Text color="gray.300" fontSize="small">
          wr_rodrigues@outlook.com.br
        </Text>
      </Box>

      <Avatar size="md" name="Wellington Rodrigues" />
    </Flex>
  );
}
