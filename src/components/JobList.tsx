import React, { useEffect, useMemo, useState } from 'react';
import { useTable, useExpanded, usePagination, Cell } from 'react-table';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex,
    IconButton,
    Text,
    Tooltip,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react';
import {
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    ViewIcon,
} from '@chakra-ui/icons';
import JobService from '../services/jobs.service';

// import makeData from './makeData';

// function CustomTable({ columns, data }: any) {
//     // Use the state and functions returned from useTable to build your UI
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         prepareRow,
//         page, // Instead of using 'rows', we'll use page,
//         // which has only the rows for the active page

//         // The rest of these things are super handy, too ;)
//         canPreviousPage,
//         canNextPage,
//         pageOptions,
//         pageCount,
//         gotoPage,
//         nextPage,
//         previousPage,
//         setPageSize,
//         state: { pageIndex, pageSize },
//     } = useTable(
//         {
//             columns,
//             data,
//             initialState: { pageIndex: 0 },
//         },
//         usePagination
//     );

//     // Render the UI for your table
//     return (
//         <>
//             <pre>
//                 <code>
//                     {JSON.stringify(
//                         {
//                             pageIndex,
//                             pageSize,
//                             pageCount,
//                             canNextPage,
//                             canPreviousPage,
//                         },
//                         null,
//                         2
//                     )}
//                 </code>
//             </pre>
//             <Table {...getTableProps()}>
//                 <Thead>
//                     {headerGroups.map((headerGroup: any) => (
//                         <Tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map((column: any) => (
//                                 <Th {...column.getHeaderProps()}>
//                                     {column.render('Header')}
//                                 </Th>
//                             ))}
//                         </Tr>
//                     ))}
//                 </Thead>
//                 <Tbody {...getTableBodyProps()}>
//                     {page.map((row: any, i: any) => {
//                         prepareRow(row);
//                         return (
//                             <Tr {...row.getRowProps()}>
//                                 {row.cells.map((cell: any) => {
//                                     return (
//                                         <Td {...cell.getCellProps()}>
//                                             {cell.render('Cell')}
//                                         </Td>
//                                     );
//                                 })}
//                             </Tr>
//                         );
//                     })}
//                 </Tbody>
//             </Table>

//             <Flex justifyContent="space-between" m={4} alignItems="center">
//                 <Flex>
//                     <Tooltip label="First Page">
//                         <IconButton
//                             aria-label="first-page"
//                             onClick={() => gotoPage(0)}
//                             isDisabled={!canPreviousPage}
//                             icon={<ArrowLeftIcon h={3} w={3} />}
//                             mr={4}
//                         />
//                     </Tooltip>
//                     <Tooltip label="Previous Page">
//                         <IconButton
//                             aria-label="previous-page"
//                             onClick={previousPage}
//                             isDisabled={!canPreviousPage}
//                             icon={<ChevronLeftIcon h={6} w={6} />}
//                         />
//                     </Tooltip>
//                 </Flex>

//                 <Flex alignItems="center">
//                     <Text shrink="0" mr={8}>
//                         Page{' '}
//                         <Text fontWeight="bold" as="span">
//                             {pageIndex + 1}
//                         </Text>{' '}
//                         of{' '}
//                         <Text fontWeight="bold" as="span">
//                             {pageOptions.length}
//                         </Text>
//                     </Text>
//                     <Text shrink="0">Go to page:</Text>{' '}
//                     <NumberInput
//                         ml={2}
//                         mr={8}
//                         w={28}
//                         min={1}
//                         max={pageOptions.length}
//                         onChange={(value: any) => {
//                             const page = value ? value - 1 : 0;
//                             gotoPage(page);
//                         }}
//                         defaultValue={pageIndex + 1}
//                     >
//                         <NumberInputField />
//                         <NumberInputStepper>
//                             <NumberIncrementStepper />
//                             <NumberDecrementStepper />
//                         </NumberInputStepper>
//                     </NumberInput>
//                     <Select
//                         w={32}
//                         value={pageSize}
//                         onChange={(e) => {
//                             setPageSize(Number(e.target.value));
//                         }}
//                     >
//                         {[10, 20, 30, 40, 50].map((pageSize) => (
//                             <option key={pageSize} value={pageSize}>
//                                 Show {pageSize}
//                             </option>
//                         ))}
//                     </Select>
//                 </Flex>

//                 <Flex>
//                     <Tooltip label="Next Page">
//                         <IconButton
//                             aria-label="next-page"
//                             onClick={nextPage}
//                             isDisabled={!canNextPage}
//                             icon={<ChevronRightIcon h={6} w={6} />}
//                         />
//                     </Tooltip>
//                     <Tooltip label="Last Page">
//                         <IconButton
//                             aria-label="last-page"
//                             onClick={() => gotoPage(pageCount - 1)}
//                             isDisabled={!canNextPage}
//                             icon={<ArrowRightIcon h={3} w={3} />}
//                             ml={4}
//                         />
//                     </Tooltip>
//                 </Flex>
//             </Flex>
//         </>
//     );
// }
function TCell({ columns, data }: any) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <Td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </Td>
                                );
                            })}
                        </Tr>
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
                Cell: ({ row: { original } }) => (
                    <span>{original.queries.length}</span>
                ),
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
