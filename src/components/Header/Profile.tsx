import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Kleyton Solinho</Text>
        <Text color="gray.500" fontSize="small">kleytonsolinho@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Kleyton Solinho" src="https://github.com/kleytonsolinho.png" />

    </Flex>
  );
}