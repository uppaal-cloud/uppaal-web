import React, { SyntheticEvent, useEffect, useState } from 'react';
import { MdCheckCircle, MdError, MdSave } from 'react-icons/md';
import { Cell, useTable } from 'react-table';
import Moment from 'react-moment';
import { saveAs } from 'file-saver';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Tooltip,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    AccordionIcon,
    List,
    ListItem,
    ListIcon,
    useDisclosure,
    Modal,
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Code,
    Text,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import prettyBytes from 'pretty-bytes';
import prettyMs from 'pretty-ms';
import JobService from '../services/jobs.service';
import useFindUser from '../hooks/useFindUser';

function TCell({ columns, data }: any) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });
    const handleTraceDownload = (query: any) => {
        console.log(query);

        if (!query.trace) return;

        const blob = new Blob([query.trace], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'trace.xtr');
    };

    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <>
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <Td borderBottom="none" {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </Td>
                                    );
                                })}
                            </Tr>
                            <Tr>
                                <Td colSpan={columns.length}>
                                    <Accordion allowToggle>
                                        <AccordionItem border="none">
                                            <h2>
                                                <AccordionButton>
                                                    <AccordionIcon />
                                                    <Box flex="1" textAlign="left">
                                                        Results ({data[i].queries.length})
                                                    </Box>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <List>
                                                    {data[i].queries.map(
                                                        (query: Query, ind: number) => {
                                                            return (
                                                                <ListItem
                                                                    onClick={(
                                                                        e: SyntheticEvent
                                                                    ) => {
                                                                        e.preventDefault();
                                                                        handleTraceDownload(
                                                                            data[i].queries[ind]
                                                                        );
                                                                    }}
                                                                >
                                                                    <ListIcon
                                                                        as={
                                                                            query.result ===
                                                                            'satisfied'
                                                                                ? MdCheckCircle
                                                                                : MdError
                                                                        }
                                                                        color={
                                                                            query.result ===
                                                                            'satisfied'
                                                                                ? 'green.500'
                                                                                : 'red.500'
                                                                        }
                                                                    />
                                                                    <Tooltip
                                                                        label={
                                                                            query.trace
                                                                                ? 'Download trace for ' +
                                                                                  query.formula
                                                                                : ''
                                                                        }
                                                                        aria-label="A tooltip"
                                                                    >
                                                                        <Text
                                                                            as="span"
                                                                            cursor={
                                                                                query.trace
                                                                                    ? 'pointer'
                                                                                    : 'default'
                                                                            }
                                                                        >
                                                                            {query.formula}
                                                                        </Text>
                                                                    </Tooltip>
                                                                    {query.trace ? (
                                                                        <ListIcon as={MdSave} />
                                                                    ) : (
                                                                        ''
                                                                    )}
                                                                </ListItem>
                                                            );
                                                        }
                                                    )}
                                                </List>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Td>
                            </Tr>
                        </>
                    );
                })}
            </Tbody>
        </Table>
    );
}

function JobList() {
    const [data, setData] = useState([]);
    const [xml, setXml] = useState('');
    let { isOpen, onOpen, onClose } = useDisclosure();
    const { user, isLoading } = useFindUser();

    useEffect(() => {
        (async () => {
            const res = await JobService.fetchJobs(user);
            if (!res) {
                console.log('no user');
                return;
            }
            const arr: any = res.map((entry: any) => {
                return {
                    name: entry.name || 'Job Name',
                    description: entry.description || 'Job Description',
                    status: entry?.status || 'running',
                    cpu: entry?.usage?.cpu || 0,
                    ram: entry?.usage?.ram || 0,
                    start: entry?.start_time || '',
                    end: entry?.end_time || '',
                    xml: entry?.xml || '',
                    queries: entry?.queries || [],
                };
            });
            setData(arr);
        })();
    }, [user]);

    const handleXmlDownload = (xml: string) => {
        const blob = new Blob([xml], { type: 'text/xml;charset=utf-8' });
        saveAs(blob, 'source.xml');
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'description',
                accessor: 'description',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Memory Usage',
                accessor: 'ram',
                Cell: ({ row }: Cell<any>) => {
                    return prettyBytes(row.original.ram);
                },
            },
            {
                Header: 'CPU Usage',
                accessor: 'cpu',
                Cell: ({ row }: Cell<any>) => {
                    return prettyMs(row.original.cpu);
                },
            },
            {
                Header: 'Start Time',
                accessor: 'start',
                Cell: ({ row }: Cell<any>) => (
                    <Moment
                        style={{ maxWidth: '120px', display: 'block' }}
                        date={row.original.start}
                        unit="days"
                        trim
                        durationFromNow
                    />
                ),
            },
            {
                Header: 'End Time',
                accessor: 'end',
                Cell: ({ row }: Cell<any>) => (
                    <Moment
                        style={{ maxWidth: '120px', display: 'block' }}
                        date={row.original.end}
                        format="MMMM Do YYYY, h:mm:ss a"
                        trim
                    />
                ),
            },
            {
                Header: 'XML',
                accessor: 'xml',
                Cell: ({ row }: Cell<any>) => (
                    <>
                        <Tooltip label="View XML" fontSize="md">
                            <IconButton
                                onClick={() => {
                                    setXml(row.original.xml);
                                    onOpen();
                                }}
                                aria-label="View XML"
                                icon={<ViewIcon />}
                            />
                        </Tooltip>
                    </>
                ),
            },
            // {
            //     Header: 'Results',
            //     accessor: 'queries',
            //     Cell: ({ row: { original } }: Cell<any>) => <span>{original.queries.length}</span>,
            // },
        ],
        [onOpen]
    );

    return (
        <>
            <TCell columns={columns} data={data} />
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>XML Document</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Code>{xml}</Code>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={() => handleXmlDownload(xml)} variant="ghost">
                            Download
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export interface Query {
    id: number;
    formula: string;
    result: string;
    trace: string;
}

export interface JobTableEntry {
    name: string;
    description: string;
    status: string;
    cpu: number;
    ram: number;
    start_time: Date;
    end_time: Date;
    xml: string;
    queries: Array<any>;
}

export default JobList;
