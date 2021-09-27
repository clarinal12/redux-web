/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConnectBitcloutInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: ConnectBitclout
// ====================================================

export interface ConnectBitclout_connectBitclout_account_AdminAccount {
  __typename: 'AdminAccount' | 'FollowerAccount';
}

export interface ConnectBitclout_connectBitclout_account_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface ConnectBitclout_connectBitclout_account_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
  description: string | null;
  image_next: ConnectBitclout_connectBitclout_account_CreatorAccount_image_next | null;
}

export type ConnectBitclout_connectBitclout_account =
  | ConnectBitclout_connectBitclout_account_AdminAccount
  | ConnectBitclout_connectBitclout_account_CreatorAccount;

export interface ConnectBitclout_connectBitclout {
  __typename: 'ConnectBitcloutResponse';
  account: ConnectBitclout_connectBitclout_account;
}

export interface ConnectBitclout {
  /**
   * Integration for Bitclout Account
   *
   * ### Error Codes
   *
   * - **A00004** - Token is invalid.
   * - **A00005** - Bitclout account does not exist.
   * - **A00006** - The bitclout account is already integrated by another creator/follower.
   */
  connectBitclout: ConnectBitclout_connectBitclout;
}

export interface ConnectBitcloutVariables {
  input: ConnectBitcloutInput;
}
