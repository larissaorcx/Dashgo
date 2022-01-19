import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {RiSearchLine} from 'react-icons/ri';

export function SerchBox() {

    //Controlled components
    // const [serch, setSerch] = useState('')

    // //Uncontrolled components

    // const serchInputRef = useRef<HTMLInputElement>(null)

    // console.log(serchInputRef.current.value)

    return(
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
        >
        
            <Input
            color="gray.50"
            variant="unstyled"
            placeholder='Buscar na plataforma'
            _placeholder={{color: 'gray.400'}}
            px="4"
            mr="4"
            // ref={serchInputRef}
            // // value={serch}
            // onChange={event => setSerch(event.target.value)} // observa as mudanças no estado
            />
            
            <Icon as={RiSearchLine} fontSize="20"/>
        </Flex>
    );
}