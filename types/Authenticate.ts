/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AuthenticateInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: Authenticate
// ====================================================

export interface Authenticate_authenticate {
  __typename: 'AuthenticateResponse';
  token: string;
}

export interface Authenticate {
  /**
   * Generate access token
   *
   * ### Error Codes
   *
   * - **A00001** - Email address does not exist.
   * - **A00003** - OTP is invalid.
   */
  authenticate: Authenticate_authenticate;
}

export interface AuthenticateVariables {
  input?: AuthenticateInput | null;
}
