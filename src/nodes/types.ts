import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type PaymentinitNode = Node<{ amount: number, label: string }, 'paymentInit'>;
export type PaymentcountryNode = Node<{ currency: string, country: string, countryCode: string }, 'paymentCountry'>;
export type PaymentProviderNode = Node<{ providerName: string, code: string }, 'paymentProvider'>
export type PaymentProviderSelect = Node<Record<string, never>,'paymentProviderSelect'>
export type AppNode = BuiltInNode | PositionLoggerNode | PaymentinitNode | PaymentcountryNode | PaymentProviderNode | PaymentProviderSelect;
