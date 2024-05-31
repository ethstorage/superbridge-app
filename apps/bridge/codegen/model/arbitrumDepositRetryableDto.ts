/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { DeploymentDto } from './deploymentDto';
import type { ConfirmationDto } from './confirmationDto';
import type { ArbitrumDepositRetryableDtoMetadata } from './arbitrumDepositRetryableDtoMetadata';
import type { ArbitrumTransactionType } from './arbitrumTransactionType';

export interface ArbitrumDepositRetryableDto {
  createdAt: string;
  deployment: DeploymentDto;
  deploymentId: string;
  deposit: ConfirmationDto;
  id: string;
  l2TransactionHash: string;
  metadata: ArbitrumDepositRetryableDtoMetadata;
  relay?: ConfirmationDto;
  type: ArbitrumTransactionType;
  updatedAt: string;
}
