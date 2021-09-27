/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FileStatus } from './globalTypes';

// ====================================================
// GraphQL mutation operation: GenerateBitcloutPost
// ====================================================

export interface GenerateBitcloutPost_generateBitcloutPost_image {
  __typename: 'File';
  id: string;
  mimetype: string;
  encoding: string;
  url: any | null;
  status: FileStatus;
  createdAt: any;
}

export interface GenerateBitcloutPost_generateBitcloutPost {
  __typename: 'GenerateBitcloutPostResponse';
  message: string;
  image: GenerateBitcloutPost_generateBitcloutPost_image;
}

export interface GenerateBitcloutPost {
  /**
   * Generating an image with predefined text
   * to be shared to bitclout.
   *
   * - **B00002** - No creator found.
   * - **B00003** - No username on the found creator.
   * - **B00004** - Cannot share jamclout profile if no profile picture.
   * - **B00005** - Cannot share jamclout profile if no profile picture.
   */
  generateBitcloutPost: GenerateBitcloutPost_generateBitcloutPost;
}
