/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateLinkInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreateLink
// ====================================================

export interface CreateLink_createLink_link {
  __typename: 'Link';
  id: string;
  link: any;
}

export interface CreateLink_createLink {
  __typename: 'CreateLinkResponse';
  link: CreateLink_createLink_link;
}

export interface CreateLink {
  createLink: CreateLink_createLink;
}

export interface CreateLinkVariables {
  input: CreateLinkInput;
}
