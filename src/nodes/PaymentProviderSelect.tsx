import { Button, Menu, Portal } from "@chakra-ui/react";
import { useReactFlow, Node } from "@xyflow/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const PAYMENT_PROVIDERS = [
   { code: "GP", name: "GooglePay" },
   { code: "AP", name: "ApplePay" },
   { code: "PP", name: "PhonePe" },
   { code: "PYTM", name: "Paytm" },
];

export function PaymentProviderSelect() {
   const { setNodes } = useReactFlow();
   const onProviderClick = ({ name, code }: { name: string; code: string }) => {
      const location = Math.random() * 500;
      setNodes((AppNodes: Node[]) => [
         ...AppNodes,
         {
            id: `${AppNodes.length + 1}`,
            data: { providerName: name, code },
            type: "paymentProvider",
            position: { x: location, y: location },
         },
      ]);
   };

   return (
      <Menu.Root positioning={{ placement: "right-start" }}>
         <Menu.Trigger asChild>
            <Button variant="outline" size="xs" bg='beige' color='black' _hover={{ bg: 'lightgray' }} _active={{ bg: 'gray.300' }}>
               Click to Select a paymentProvider<IoIosArrowDropdownCircle />
            </Button>
         </Menu.Trigger>
         <Portal>
            <Menu.Positioner>
               <Menu.Content>
                  {PAYMENT_PROVIDERS.map((provider) => (
                     <Menu.Item key={provider.code} value={provider.code} onClick={() => onProviderClick(provider)}>
                        {provider.name}
                     </Menu.Item>
                  ))}
               </Menu.Content>
            </Menu.Positioner>
         </Portal>
      </Menu.Root>
   )
}

