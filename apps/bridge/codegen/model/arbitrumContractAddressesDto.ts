/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { L2ArbitrumContractAddressesDto } from './l2ArbitrumContractAddressesDto';

export interface ArbitrumContractAddressesDto {
  bridge: string;
  inbox: string;
  l1GatewayRouter: string;
  l2: L2ArbitrumContractAddressesDto;
  l2GatewayRouter: string;
  outbox: string;
  rollup: string;
}
