/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GenerateEmailOtpInput_next } from './globalTypes';

// ====================================================
// GraphQL mutation operation: GenerateEmailOtpNext
// ====================================================

export interface GenerateEmailOtpNext {
  /**
   * Generate email OTP
   *
   * ### Error Codes
   *
   * - **A00002** - Can only generate one email OTP every 30s.
   */
  generateEmailOtp_next: boolean;
}

export interface GenerateEmailOtpNextVariables {
  input?: GenerateEmailOtpInput_next | null;
}
