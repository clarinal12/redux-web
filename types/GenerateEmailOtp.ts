/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GenerateEmailOtpInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: GenerateEmailOtp
// ====================================================

export interface GenerateEmailOtp_generateEmailOtp_account_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface GenerateEmailOtp_generateEmailOtp_account {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
  description: string | null;
  image_next: GenerateEmailOtp_generateEmailOtp_account_image_next | null;
}

export interface GenerateEmailOtp_generateEmailOtp {
  __typename: 'GenerateEmailOtpResponse';
  account: GenerateEmailOtp_generateEmailOtp_account | null;
}

export interface GenerateEmailOtp {
  generateEmailOtp: GenerateEmailOtp_generateEmailOtp;
}

export interface GenerateEmailOtpVariables {
  input?: GenerateEmailOtpInput | null;
}
