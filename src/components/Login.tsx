import { Flex, Box, Heading } from '@chakra-ui/layout';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    InputRightElement,
    IconButton,
    InputGroup,
} from '@chakra-ui/react';
import { BaseSyntheticEvent, useState } from 'react';
import useAuth from '../hooks/useAuth';
// import AuthService from '../services/auth.service';
// import

const Login = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const handleSignIn = async (event: BaseSyntheticEvent) => {
        event.preventDefault();

        // login

        await login(email, password).then((res: any) => {
            console.log(res);
            if (res) {
                props.history.push('/');
                // window.location.reload();
            }
        });
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="600px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form method="POST" onSubmit={handleSignIn}>
                        <FormControl isRequired>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                type="email"
                                onChange={({ target }) => setEmail(target.value)}
                                placeholder="test@test.com"
                            />
                        </FormControl>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={({ target }) => setPassword(target.value)}
                                    placeholder="*******"
                                />
                                <InputRightElement width="3rem">
                                    <IconButton
                                        aria-label="Show password"
                                        h="1.5rem"
                                        size="sm"
                                        onClick={() => setShowPassword(!showPassword)}
                                        icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="teal"
                            variant="outline"
                            width="full"
                            mt={4}
                        >
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
};

export default Login;
