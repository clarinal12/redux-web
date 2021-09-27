/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateFollowerAccountInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreateFollowerAccount
// ====================================================

export interface CreateFollowerAccount_createFollowerAccount_account {
  __typename: 'FollowerAccount';
  id: string;
}

export interface CreateFollowerAccount_createFollowerAccount {
  __typename: 'CreateFollowerAccountResponse';
  token: string;
  account: CreateFollowerAccount_createFollowerAccount_account;
}

export interface CreateFollowerAccount {
  /**
   * Create follower account
   *
   * ### Error Codes
   *
   * - **A00003** - OTP is invalid.
   * - **Z00004** - Email address is in use.
   */
  createFollowerAccount: CreateFollowerAccount_createFollowerAccount;
}

export interface CreateFollowerAccountVariables {
  input: CreateFollowerAccountInput;
}
