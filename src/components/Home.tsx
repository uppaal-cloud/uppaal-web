import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Spacer,
    Text,
    Stack,
    Wrap,
} from '@chakra-ui/react';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        // <Wrap>
        // <Flex h="100vh" justifyItems="center">
        //     <Stack flex="1" w="100%" h="100%" bg="red.400">
        //         <Heading flex="1">UPPAAL CLOUD</Heading>
        //         <Heading flex="1"> UPPAAL CLOUD</Heading>
        //         <Heading flex="1">UPPAAL CLOUD</Heading>
        //     </Stack>
        //     <Box flex="1" w="100%" bg="green.400">
        //         <Container h="100%">
        //             <Wrap h="100%">
        //                 <Center>
        //                     <Button>Login</Button>
        //                     <Button>Register</Button>
        //                 </Center>
        //             </Wrap>
        //         </Container>
        //     </Box>
        // </Flex>
        // </Wrap>
        <Flex
            align="center"
            justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
            direction={{ base: 'column-reverse', md: 'row' }}
            minH="70vh"
            px={8}
            mb={16}
            // {...rest}
        >
            <Stack mt="10%" spacing={4} w={{ base: '80%', md: '40%' }} align="center">
                <Heading
                    as="h1"
                    size="3xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign="center"
                >
                    Welcome to UPPAAL Cloud!
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign="center"
                >
                    UPPAAL Cloud is a software-as-a-service for model validation based on the
                    popular UPPAAL tool.
                </Heading>
                <Link to="/">
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        Create your account now
                    </Button>
                </Link>
                <Text fontSize="xs" mt={2} textAlign="center" color="primary.800" opacity="0.6">
                    Everything you know and love about UPPAAL is now available in the Cloud. With
                    UPPAAL Cloud you can: Submit multiple models for concurrent validation. Validate
                    even your most complex models. Get detailed information about each model
                    validation. Submit your model for validation to UPPAAL Cloud today!
                </Text>
            </Stack>

            <Stack spacing={5} w={{ base: '80%', md: '40%' }} align="center">
                <Heading
                    as="h3"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign="center"
                    margin="20% auto"
                >
                    Use Uppaal Cloud NOW!
                </Heading>

                {!localStorage.user ? (
                    <>
                        <Link to="/login" style={{ width: '80%' }}>
                            <Button colorScheme="teal" variant="outline" w="100%">
                                Login
                            </Button>
                        </Link>

                        <Link to="/register" style={{ width: '80%' }}>
                            <Button variant="outline" w="100%">
                                Register
                            </Button>
                        </Link>
                    </>
                ) : (
                    <Link to="/jobs" style={{ width: '80%' }}>
                        <Button colorScheme="teal" w="100%">
                            Jobs
                        </Button>
                    </Link>
                )}
            </Stack>
        </Flex>
    );
};

// const FlexBox = styled(Box)`
//     width="100%"
// `
export default Home;
