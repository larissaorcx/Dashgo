import {FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as CkakraInputProps} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends CkakraInputProps{
    name:string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, ...rest}, ref) => {
    return(
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name} id='211'>{label}</FormLabel> }
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
                ref={ref}
                {...rest}
            />
            {!!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>)}
      </FormControl>
    );
}

export const Input = forwardRef(InputBase) //encaminha a ref