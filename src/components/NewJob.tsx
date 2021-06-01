import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Radio,
    RadioGroup,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import FileDropzone from './FileDropzone';
import JobService from '../services/jobs.service';
import { useHistory } from 'react-router-dom';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

function NewJob() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [xml, setXml] = useState<any>(null);
    const [options, setOptions] = useState<any>({
        search_order: 'breadth_first',
        state_space_reduction: 'some',
        state_space_representation: 'dbm',
        diagnostic_trace: 'fastest',
        extrapolation: 'automatic',
        hash_table_size: '16MB',
        parametric_comparison: 'false',
    });

    let history = useHistory();

    const handleJobSubmit = async () => {
        const res = await JobService.sumbitJob(name, description, xml, options);
        if (res) {
            console.log(res);
        }
        if (typeof res === 'string') {
            history.push('/jobs');
        }
    };

    return (
        <Flex width="full" my="10%" align="center" justifyContent="center">
            <Box p={8} w={800} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg">
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
                        <FormControl isRequired mb={10}>
                            <FormLabel htmlFor="xml">XML Model</FormLabel>
                            <FileDropzone setXml={setXml} />
                        </FormControl>
                        <FormControl>
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex="1" textAlign="left">
                                                        Options{' '}
                                                    </Box>
                                                    {isExpanded ? (
                                                        <MinusIcon fontSize="12px" />
                                                    ) : (
                                                        <AddIcon fontSize="12px" />
                                                    )}
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel>
                                                <RadioGroup
                                                    my={4}
                                                    name="search_order"
                                                    onChange={(value) => {
                                                        setOptions((prevState: any) => ({
                                                            ...prevState,
                                                            search_order: value,
                                                        }));
                                                    }}
                                                    value={options.search_order}
                                                >
                                                    <Text my={2}>Search Order</Text>
                                                    <Stack direction="row">
                                                        <Radio value="breadth_first">
                                                            Breadth First
                                                        </Radio>
                                                        <Radio value="depth_first">
                                                            Depth First
                                                        </Radio>
                                                        <Radio value="random_depth_first">
                                                            Random Depth First
                                                        </Radio>
                                                    </Stack>
                                                </RadioGroup>

                                                <Divider />

                                                <RadioGroup
                                                    my={4}
                                                    name="state_space_reduction"
                                                    onChange={(value) => {
                                                        setOptions((prevState: any) => ({
                                                            ...prevState,
                                                            state_space_reduction: value,
                                                        }));
                                                    }}
                                                    value={options.state_space_reduction}
                                                >
                                                    <Text my={2}>State Space Reduction</Text>
                                                    <Stack direction="row">
                                                        <Radio value="none">None</Radio>
                                                        <Radio value="some">Some</Radio>
                                                        <Radio value="most">Most</Radio>
                                                    </Stack>
                                                </RadioGroup>

                                                <Divider />

                                                <RadioGroup
                                                    my={4}
                                                    name="state_space_representation"
                                                    onChange={(value) => {
                                                        setOptions((prevState: any) => ({
                                                            ...prevState,
                                                            state_space_representation: value,
                                                        }));
                                                    }}
                                                    value={options.state_space_representation}
                                                >
                                                    <Text my={2}>State Space Representation</Text>

                                                    <Stack direction="row">
                                                        <Radio value="dbm">DBM</Radio>
                                                        <Radio value="compact_data_structure">
                                                            Compact Data Structure
                                                        </Radio>
                                                        <Radio value="under_approximation">
                                                            Under Approximation
                                                        </Radio>
                                                        <Radio value="over_approximation">
                                                            Over Approximation
                                                        </Radio>
                                                    </Stack>
                                                </RadioGroup>

                                                <Divider />

                                                <RadioGroup
                                                    my={4}
                                                    name="diagnostic_trace"
                                                    onChange={(value) => {
                                                        setOptions((prevState: any) => ({
                                                            ...prevState,
                                                            diagnostic_trace: value,
                                                        }));
                                                    }}
                                                    value={options.diagnostic_trace}
                                                >
                                                    <Text my={2}>Diagnostic Trace</Text>
                                                    <Stack direction="row">
                                                        <Radio value="some">Some</Radio>
                                                        <Radio value="shortest">Shortest</Radio>
                                                        <Radio value="fastest">Fastest</Radio>
                                                    </Stack>
                                                </RadioGroup>

                                                <Divider />

                                                <RadioGroup
                                                    my={4}
                                                    name="extrapolation"
                                                    onChange={(value) => {
                                                        setOptions((prevState: any) => ({
                                                            ...prevState,
                                                            extrapolation: value,
                                                        }));
                                                    }}
                                                    value={options.extrapolation}
                                                >
                                                    <Text my={2}>Extrapolation</Text>
                                                    <Stack direction="row">
                                                        <Radio value="automatic">Automatic</Radio>
                                                        <Radio value="none">None</Radio>
                                                        <Radio value="difference">Difference</Radio>
                                                        <Radio value="local">Local</Radio>
                                                        <Radio value="lower_upper">
                                                            Lower Upper
                                                        </Radio>
                                                    </Stack>
                                                </RadioGroup>

                                                <Divider />

                                                <Box my={4}>
                                                    <FormLabel htmlFor="hash_table_size">
                                                        Hash Table Size in MB
                                                    </FormLabel>
                                                    {/* <NumberInput
                                                        type="number"
                                                        onChange={({ target }) =>
                                                            // console.log(target.value)
                                                            setOptions((prevState: any) => ({
                                                                ...prevState,
                                                                hash_table_size:
                                                                    target.value + 'MB',
                                                            }))
                                                        }
                                                        placeholder="Value in MB"
                                                    /> */}
                                                    <NumberInput
                                                        min={0}
                                                        max={512}
                                                        onChange={(value) => {
                                                            setOptions((prevState: any) => ({
                                                                ...prevState,
                                                                hash_table_size: value + 'MB',
                                                            }));
                                                        }}
                                                        value={options.hash_table_size.slice(0, -2)}
                                                    >
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </Box>

                                                <Divider />

                                                <RadioGroup
                                                    my={4}
                                                    name="parametric_comparison"
                                                    onChange={(value) => {
                                                        setOptions((prevState: any) => ({
                                                            ...prevState,
                                                            parametric_comparison: value,
                                                        }));
                                                    }}
                                                    value={options.parametric_comparison}
                                                >
                                                    <Text my={2}>Parametric Comparison</Text>
                                                    <Stack direction="row">
                                                        <Radio value="true">True</Radio>
                                                        <Radio value="false">False</Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>
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
