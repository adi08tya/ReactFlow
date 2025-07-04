import { Handle, NodeProps, Position } from '@xyflow/react'
import { type PaymentinitNode } from './types'
import { Box, Text } from '@chakra-ui/react';

export function PaymentinitNode  ({
    data,
}: NodeProps<PaymentinitNode>) {
    const { amount , label } = data;
  return (
    <Box bg="white" border="1px solid #aa1fff">
      <Box bg="#410566" p={1}>
        <Text fontSize="sm" color="black">{label}</Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.500">₹{amount}</Text>
      </Box>
      <Handle type="source" position={Position.Bottom} />
    </Box>
  )
}