import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import FileDropzone from './FileDropzone';
import JobService from '../services/jobs.service';
import { useHistory } from 'react-router-dom';

function NewJob() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [xml, setXml] = useState<any>(null);
    let history = useHistory();

    const handleJobSubmit = async () => {
        const res = await JobService.sumbitJob(name, description, xml);
        if (typeof res === 'string') {
            history.push('/jobs');
        }
    };

    return (
        <Flex width="full" my="10%" align="center" justifyContent="center">
            <Box p={8} maxWidth="600px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Add a new job</Heading>
                </Box>
                <Box my={10} textAlign="left">
                    <form>
                        <FormControl my={6} isRequired>
                            <FormLabel htmlFor="name">Job name</FormLabel>
                            <Input
                                type="name"
                                onChange={({ target }) => setName(target.value)}
                                placeholder="Name of your job"
                            />
                        </FormControl>
                        <FormControl isRequired mb={10}>
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <Input
                                type="name"
                                onChange={({ target }) => setDescription(target.value)}
                                placeholder="Job description"
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="xml">XML Model</FormLabel>
                            <FileDropzone setXml={setXml} />
                        </FormControl>
                        <Button onClick={handleJobSubmit} colorScheme="teal" width="full" mt={10}>
                            Start
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}

export default NewJob;
