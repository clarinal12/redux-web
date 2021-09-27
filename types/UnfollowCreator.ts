/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnfollowCreator
// ====================================================

export interface UnfollowCreator_unfollowCreatorAccount_creatorAccount {
  __typename: 'CreatorAccount';
  id: string;
}

export interface UnfollowCreator_unfollowCreatorAccount {
  __typename: 'UnfollowCreatorAccountResponse';
  creatorAccount: UnfollowCreator_unfollowCreatorAccount_creatorAccount | null;
}

export interface UnfollowCreator {
  /**
   * Unfollow creator account
   *  ### Error Codes
   *
   * - **B00008** - Something wrong happened when unfollowing.
   */
  unfollowCreatorAccount: UnfollowCreator_unfollowCreatorAccount | null;
}

export interface UnfollowCreatorVariables {
  id: string;
}
