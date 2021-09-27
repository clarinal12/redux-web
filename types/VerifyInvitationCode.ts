/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VerifyInvitationCode
// ====================================================

export interface VerifyInvitationCode_invitation {
  __typename: 'Invitation';
  id: string;
  code: string;
}

export interface VerifyInvitationCode {
  invitation: VerifyInvitationCode_invitation | null;
}

export interface VerifyInvitationCodeVariables {
  code: string;
}
