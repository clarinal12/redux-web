/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GenerateTwitterRequestToken
// ====================================================

export interface GenerateTwitterRequestToken_generateTwitterRequestToken {
  __typename: 'GenerateTwitterRequestTokenResponse';
  token: string;
}

export interface GenerateTwitterRequestToken {
  /**
   * Generate twitter request token for authentication.
   *
   * - **A00007** - Invalid twitter oauth token request.
   */
  generateTwitterRequestToken: GenerateTwitterRequestToken_generateTwitterRequestToken;
}

export interface GenerateTwitterRequestTokenVariables {
  callback: any;
}
