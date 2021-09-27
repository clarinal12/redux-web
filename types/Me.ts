/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountRole, IntegrationType } from './globalTypes';

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export interface Me_me_CreatorAccount_links {
  __typename: 'Link';
  id: string;
  link: any;
  createdAt: any;
}

export interface Me_me_CreatorAccount_coverImage {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface Me_me_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface Me_me_CreatorAccount_integrations {
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

export interface Me_me_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  description: string | null;
  links: Me_me_CreatorAccount_links[];
  nsfwEnabled: boolean;
  coverImage: Me_me_CreatorAccount_coverImage | null;
  image_next: Me_me_CreatorAccount_image_next | null;
  integrations: Me_me_CreatorAccount_integrations[];
}

export interface Me_me_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type Me_me = Me_me_AdminAccount | Me_me_CreatorAccount | Me_me_FollowerAccount;

export interface Me {
  me: Me_me;
}
