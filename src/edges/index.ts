import type { Edge, EdgeTypes } from '@xyflow/react';
import CustomEdge from './CustomEdge';

export const initialEdges: Edge[] = [
  // { id: 'a->c', source: 'a', target: 'c', animated: true },
  // { id: 'b->d', source: 'b', target: 'd' },
  // { id: 'c->d', source: 'c', target: 'd', animated: true },
];

export const edgeTypes = {
  // Add your custom edge types here!
  'customEdge' : CustomEdge
} satisfies EdgeTypes;
