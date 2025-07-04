import { Handle, NodeProps, Position, useReactFlow } from "@xyflow/react";
import { type PaymentProviderNode } from "./types";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
   PYTM: "https://play-lh.googleusercontent.com/IWU8HM1uQuW8wVrp6XpyOOJXvb_1tDPUDAOfkrl83RZPG9Ww3dCY9X1AV6T1atSvgXc",
   AP: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
   GP: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
   PP: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s",
};
export function PaymentProviderNode({ data , id }: NodeProps<PaymentProviderNode>) {
   const { providerName, code } = data;
   const { setNodes } = useReactFlow();
  return (  
     <Flex
        borderRadius={"24px"}
        border="2px solid #5e5eff"
        alignItems={"center"}
        bg="white"
        p={1}
        pb={1}
        pl={"12px"}
        gap={2}
        width="140px"
        color="black"
     >
        <Box h={4} w={4}>
           <Image
              height="100%"
              src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
           />
        </Box>
        <Flex grow="1">
           <Text fontSize="small" mt={"-2px"}>
              {providerName}
           </Text>
        </Flex>
        <IconButton
           aria-label="Delete Payment Provider"
           size='xs'
           color="red"
           bg="transparent"
           pointerEvents="all"
           onClick={()=>setNodes((AppNode)=>AppNode.filter((node)=>node.id!==id))}
        >
           <MdCancel />
        </IconButton>
        <Handle type="target" position={Position.Top} />
     </Flex>
  )
}
