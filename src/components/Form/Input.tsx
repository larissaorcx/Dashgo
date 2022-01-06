import {FormControl, FormLabel, Input as ChakraInput, InputProps as CkakraInputProps} from '@chakra-ui/react'

interface InputProps extends CkakraInputProps{
    name:string;
    label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
    return(
        <FormControl>
             { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
                <ChakraInput
                name="email" 
                id={name}
                focusBorderColor='pink.500'
                bgColor="gray.900"
                variant="filled" //variações de input 
                _hover={{
                    bgColor:"gray.900",
                }}
                size="lg"
                {...rest}
                />
      </FormControl>
    );
}