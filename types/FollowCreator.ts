/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FollowCreator
// ====================================================

export interface FollowCreator_followCreatorAccount_creatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
}

export interface FollowCreator_followCreatorAccount {
  __typename: 'FollowCreatorAccountResponse';
  creatorAccount: FollowCreator_followCreatorAccount_creatorAccount | null;
}

export interface FollowCreator {
  followCreatorAccount: FollowCreator_followCreatorAccount;
}

export interface FollowCreatorVariables {
  id: string;
}
