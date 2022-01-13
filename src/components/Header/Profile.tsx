import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr="4" textAlign="right">
                <Text>Ingrid Larissa</Text>
                <Text color="gray.300" fontSize="small">Larissaorcx@gmail.com</Text>
            </Box>
            <Avatar size="md" name='Ingrid Larissa' src="https://github.com/larissaorcx.png"/>
        </Flex>
    );
}