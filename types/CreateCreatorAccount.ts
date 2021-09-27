/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCreatorAccountInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreateCreatorAccount
// ====================================================

export interface CreateCreatorAccount_createCreatorAccount_account {
  __typename: 'CreatorAccount';
  id: string;
}

export interface CreateCreatorAccount_createCreatorAccount {
  __typename: 'CreateCreatorAccountResponse';
  token: string;
  account: CreateCreatorAccount_createCreatorAccount_account;
}

export interface CreateCreatorAccount {
  /**
   * Create creator account
   *
   * ### Error Codes
   *
   * - **A00003** - OTP is invalid.
   * - **Z00001** - Invitation is invalid.
   * - **Z00002** - Email address is in use.
   */
  createCreatorAccount: CreateCreatorAccount_createCreatorAccount;
}

export interface CreateCreatorAccountVariables {
  input: CreateCreatorAccountInput;
}
