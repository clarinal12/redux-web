/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AccountByEmailAddress
// ====================================================

export interface AccountByEmailAddress_accountByEmailAddress_AdminAccount {
  __typename: 'AdminAccount';
}

export interface AccountByEmailAddress_accountByEmailAddress_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
}

export interface AccountByEmailAddress_accountByEmailAddress_FollowerAccount {
  __typename: 'FollowerAccount';
  id: string;
}

export type AccountByEmailAddress_accountByEmailAddress =
  | AccountByEmailAddress_accountByEmailAddress_AdminAccount
  | AccountByEmailAddress_accountByEmailAddress_CreatorAccount
  | AccountByEmailAddress_accountByEmailAddress_FollowerAccount;

export interface AccountByEmailAddress {
  /**
   * Retrieve account given the email address.
   *
   * ### Error Codes
   *
   * -
   */
  accountByEmailAddress: AccountByEmailAddress_accountByEmailAddress | null;
}

export interface AccountByEmailAddressVariables {
  emailAddress?: any | null;
}
