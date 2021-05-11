import React, { useEffect, useState } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useTable } from 'react-table';
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
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import JobService from '../services/jobs.service';

function TCell({ columns, data }: any) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

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
                                                        Results
                                                    </Box>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <List>
                                                    {row.values.queries.map((query: Query) => {
                                                        return (
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        query.result === 'satisfied'
                                                                            ? MdCheckCircle
                                                                            : MdError
                                                                    }
                                                                    color={
                                                                        query.result === 'satisfied'
                                                                            ? 'green.500'
                                                                            : 'red.500'
                                                                    }
                                                                />
                                                                {query.formula}
                                                            </ListItem>
                                                        );
                                                    })}
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

    useEffect(() => {
        (async () => {
            const res = await JobService.fetchJobs();

            const arr: any = res.map((entry: any) => {
                return {
                    name: entry.name,
                    description: entry.description,
                    status: entry.status,
                    cpu: entry.usage.cpu,
                    ram: entry.usage.ram,
                    start: entry.start_time,
                    end: entry.end_time,
                    xml: entry.xml,
                    queries: entry.queries,
                };
            });
            setData(arr);
            console.log(res);
            console.log(arr);
        })();
    }, []);

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
                Header: 'CPU Usage',
                accessor: 'cpu',
            },
            {
                Header: 'Memery Usage',
                accessor: 'ram',
            },
            {
                Header: 'Start Time',
                accessor: 'start',
                Cell: ({ row }: any) => {
                    console.log(row.original);
                    return <span>{row.original.name}</span>;
                },
            },
            {
                Header: 'End Time',
                accessor: 'end',
            },
            {
                Header: 'XML',
                accessor: 'xml',
                Cell: ({ row }) => (
                    <Tooltip label="View XML" fontSize="md">
                        {/* <ViewIcon /> */}
                        <IconButton aria-label="View XML" icon={<ViewIcon />} />
                    </Tooltip>
                ),
            },
            {
                Header: 'Results',
                accessor: 'queries',
                Cell: ({ row: { original } }) => <span>{original.queries.length}</span>,
            },
        ],
        []
    );

    // const data = React.useMemo(() => console.log(100000), []);
    // const data = useMemo(async () => await JobService.fetchJobs(), []);
    console.log(data);
    return <TCell columns={columns} data={data} />;
    // return <div></div>;

    // return <CustomTable columns={columns} data={data} />;
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
