import { Handle, NodeProps, Position } from '@xyflow/react'
import { type PaymentcountryNode } from './types'
import { Box, Flex, Text } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';

export function PaymentcountryNode({
   data,
}: NodeProps<PaymentcountryNode>) {
   const { currency, country, countryCode } = data;
   return (
      <Flex
         alignItems='center'
         borderRadius='8px'
         bg='#e2e8f0'
         border='2px solid #bbbdbf'
         color='black'
         p={2}
         gap={2}
         width='155px'
      >
         <Box>
            <ReactCountryFlag
               countryCode={countryCode}
               svg
               aria-label={country}
               style={{
                  fontSize: '2em',
                  lineHeight: '2em',
               }}
            
            />
         </Box>
         <Flex grow='1'>
            <Box>
               <Text>{country}</Text>
               <Text fontSize='sm'>{currency}</Text>
            </Box>
         </Flex>
         <Handle
            type="source"
            position={Position.Bottom}
            style={{ background: '#555' }}
         />
         <Handle
            type="target"
            position={Position.Top}
            style={{ background: '#555' }}
         />
      </Flex>
   )
}