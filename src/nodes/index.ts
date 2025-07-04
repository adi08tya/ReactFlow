import type { NodeTypes } from '@xyflow/react';
import { PaymentProviderNode } from './PaymentProviderNode';
import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';
import { PaymentinitNode } from './PaymentInitNode';
import { PaymentcountryNode } from './PaymentCountryNode';
import { PaymentProviderSelect } from './PaymentProviderSelect';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'paymentInit', position: { x: 0, y: 0 }, data: { label: 'Payment Initialised' , amount: 100 } },
  {
    id: 'b',
    type: 'paymentCountry',
    position: { x: -100, y: 100 },
    data: {currency: '$', country: 'US',countryCode: 'US'},
  },
  { id: 'c', type:'paymentCountry' , position: { x: 100, y: 100 }, data: { currency: '₹', country: 'India',countryCode: 'IN' } },
  {
    id: 'd',
    type: 'paymentProvider',
    position: { x: -200, y: 200 },
    data: { providerName :'googlePay', code:'GP' },
  },
  {
    id: 'e',
    type: 'paymentProvider',
    position: { x: -50, y: 200 },
    data: { providerName :'PhonePe', code:'PP' },
  },
  {
    id: 'f',
    type: 'paymentProvider',
    position: { x: 100, y: 200 },
    data: { providerName :'applePay', code:'AP' },
  },
  {
    id: 'g',
    type: 'paymentProvider',
    position: { x:250, y: 200 },
    data: { providerName :'Paytm', code:'PYTM' },
  },
  {
    id: 'h',
    data: {},
    position:{x: -50, y: -100},
    type:'paymentProviderSelect',
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'paymentInit': PaymentinitNode,
  'paymentCountry': PaymentcountryNode,
  'paymentProvider': PaymentProviderNode,
  'paymentProviderSelect': PaymentProviderSelect
  // Add any of your custom nodes here!
} satisfies NodeTypes;
