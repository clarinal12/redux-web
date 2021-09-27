/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountRole, IntegrationType } from './globalTypes';

// ====================================================
// GraphQL query operation: Profile
// ====================================================

export interface Profile_creatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface Profile_creatorAccount_coverImage {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface Profile_creatorAccount_integrations {
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

export interface Profile_creatorAccount_links {
  __typename: 'Link';
  id: string;
  link: any;
}

export interface Profile_creatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  role: AccountRole;
  username: string | null;
  description: string | null;
  following: boolean;
  image_next: Profile_creatorAccount_image_next | null;
  coverImage: Profile_creatorAccount_coverImage | null;
  integrations: Profile_creatorAccount_integrations[];
  links: Profile_creatorAccount_links[];
}

export interface Profile {
  creatorAccount: Profile_creatorAccount | null;
}

export interface ProfileVariables {
  username: string;
}
