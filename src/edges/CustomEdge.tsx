import { IconButton } from "@chakra-ui/react";
import { BezierEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, useReactFlow } from "@xyflow/react";
import { MdCancel } from "react-icons/md";

export default function CustomEdge(props: EdgeProps) {
   const { id , sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
   const [, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
   const { setEdges } = useReactFlow();
   return (
    <>
       <BezierEdge {...props} />
     <EdgeLabelRenderer>
      <IconButton
               aria-label="Delete Edge"
               pos='absolute'
               size='sm'
               color="red"
               transform={`translate(-50%,-50%) translate(${labelX}px,${labelY}px)`}
               bg="transparent"
               pointerEvents="all"
               onClick={()=>setEdges(edges=>edges.filter(edge=>edge.id!==id))}
        > 
           <MdCancel />
        </IconButton>
         </EdgeLabelRenderer>
      </>
  )
}
