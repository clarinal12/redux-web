/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConnectTwitterInput, IntegrationType } from './globalTypes';

// ====================================================
// GraphQL mutation operation: ConnectTwitter
// ====================================================

export interface ConnectTwitter_connectTwitter_account_AdminAccount {
  __typename: 'AdminAccount' | 'FollowerAccount';
}

export interface ConnectTwitter_connectTwitter_account_CreatorAccount_integrations {
  __typename: 'Integration';
  id: string;
  type: IntegrationType;
  followersCount: number;
  followingCount: number;
  url: any;
  /**
   * ### BITCLOUT
   * - publicKey: String
   * - username: String
   * - image: String
   * - description: String
   * - coinPriceBitCloutNanos: number
   * - founderRewawrd: number
   *
   * _____
   */
  details: any;
}

export interface ConnectTwitter_connectTwitter_account_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  integrations: ConnectTwitter_connectTwitter_account_CreatorAccount_integrations[];
}

export type ConnectTwitter_connectTwitter_account =
  | ConnectTwitter_connectTwitter_account_AdminAccount
  | ConnectTwitter_connectTwitter_account_CreatorAccount;

export interface ConnectTwitter_connectTwitter {
  __typename: 'ConnectTwitterResponse';
  account: ConnectTwitter_connectTwitter_account;
}

export interface ConnectTwitter {
  /**
   * Integration for Twitter Account
   *
   * ### Error Codes
   *
   * - **A00008** - Token is invalid.
   * - **A00009** - Twitter account does not exist.
   * - **A000010** - Twitter account is already integrated by other creator.
   */
  connectTwitter: ConnectTwitter_connectTwitter;
}

export interface ConnectTwitterVariables {
  input: ConnectTwitterInput;
}
