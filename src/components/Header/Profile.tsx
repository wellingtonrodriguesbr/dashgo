import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  isWideVersion: boolean;
}

export function Profile({ isWideVersion = true }: ProfileProps) {
  return (
    <Flex align="center">
      {isWideVersion && (
        <Box mr="4" textAlign="right">
          <Text>Wellington Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            wr_rodrigues@outlook.com.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Wellington Rodrigues"
        src="https://github.com/wellingtonrodriguesbr.png"
      />
    </Flex>
  );
}
