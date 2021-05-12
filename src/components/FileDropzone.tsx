import { Container } from '@chakra-ui/layout';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';
import useFindUser from '../hooks/useFindUser';

const getColor = (props: any) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
};

const DropContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
`;
function FileDropzone({ setXml }: any) {
    const [file, setFile] = useState<any>({});
    const { user, isLoading } = useFindUser();

    const onDrop = useCallback(
        (acceptedFile: any) => {
            console.log(acceptedFile);

            const xmlFile = acceptedFile[0];

            if (!xmlFile) {
                return;
            }
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = async () => {
                const xmlStr = reader.result!.toString();
                // console.log(xmlStr);

                // TODO: Validate xml ???
                // const parser = new DOMParser();
                // const parsedXml = parser.parseFromString(xmlStr, 'application/xml');
                // console.log(parsedXml);
                // const res = await JobService.sumbitJob(user, xmlStr);
                // console.log(res);
                setXml(xmlStr);
            };
            setFile(xmlFile);
            reader.readAsText(xmlFile);
        },
        [setXml]
    );

    useEffect(() => {
        // submitJob(file.)
        console.log(file);
    }, [file]);

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'text/xml',
    });
    return (
        <Container>
            <DropContainer {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </DropContainer>
            <div>{file.name}</div>
        </Container>
    );
}

export default FileDropzone;
