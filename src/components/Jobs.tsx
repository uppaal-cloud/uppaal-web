// import { useEffect, useState } from 'react';
// import JobService from '../services/jobs.service';
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     Center,
// } from '@chakra-ui/react';

// const Jobs = () => {
//     const [jobs, setJobs] = useState([]);
//     useEffect(() => {
//         (async () => {
//             const res = await JobService.fetchJobs();
//             setJobs(res);
//             console.log(res);
//         })();
//     }, []);
//     return (
//         <Center w="100%">
//             <Table variant="striped">
//                 <TableCaption>
//                     Imperial to metric conversion factors
//                 </TableCaption>
//                 <Thead>
//                     <Tr>
//                         <Th>To convert</Th>
//                         <Th>into</Th>
//                         <Th isNumeric>multiply by</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     <Tr>
//                         <Td>inches</Td>
//                         <Td>millimetres (mm)</Td>
//                         <Td isNumeric>25.4</Td>
//                     </Tr>
//                     <Tr>
//                         <Td>feet</Td>
//                         <Td>centimetres (cm)</Td>
//                         <Td isNumeric>30.48</Td>
//                     </Tr>
//                     <Tr>
//                         <Td>yards</Td>
//                         <Td>metres (m)</Td>
//                         <Td isNumeric>0.91444</Td>
//                     </Tr>
//                 </Tbody>
//             </Table>
//         </Center>
//     );
// };
// export default Jobs;

import { Center, Container, Wrap } from '@chakra-ui/layout';
import React from 'react';
import JobList from './JobList';

function Jobs() {
    return (
        <Wrap>
            <JobList />
        </Wrap>
    );
}

export default Jobs;
