/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMeInput, AccountRole, IntegrationType } from './globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateMe
// ====================================================

export interface UpdateMe_updateMe_account_AdminAccount {
  __typename: 'AdminAccount' | 'FollowerAccount';
  role: AccountRole;
}

export interface UpdateMe_updateMe_account_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface UpdateMe_updateMe_account_CreatorAccount_coverImage {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface UpdateMe_updateMe_account_CreatorAccount_integrations {
  __typename: 'Integration';
  id: string;
  type: IntegrationType;
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

export interface UpdateMe_updateMe_account_CreatorAccount {
  __typename: 'CreatorAccount';
  role: AccountRole;
  id: string;
  username: string | null;
  description: string | null;
  nsfwEnabled: boolean;
  image_next: UpdateMe_updateMe_account_CreatorAccount_image_next | null;
  coverImage: UpdateMe_updateMe_account_CreatorAccount_coverImage | null;
  integrations: UpdateMe_updateMe_account_CreatorAccount_integrations[];
}

export type UpdateMe_updateMe_account =
  | UpdateMe_updateMe_account_AdminAccount
  | UpdateMe_updateMe_account_CreatorAccount;

export interface UpdateMe_updateMe {
  __typename: 'UpdateMeResponse';
  account: UpdateMe_updateMe_account;
}

export interface UpdateMe {
  /**
   * Updating the current logged in user.
   *
   * ### Error Codes
   *
   * - **B00001** - Username is already in use by another account.
   */
  updateMe: UpdateMe_updateMe;
}

export interface UpdateMeVariables {
  input?: UpdateMeInput | null;
}
