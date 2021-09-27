/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCommentInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreateComment
// ====================================================

export interface CreateComment_createComment_comment {
  __typename: 'Comment';
  message: string;
}

export interface CreateComment_createComment {
  __typename: 'CreateCommentResponse';
  comment: CreateComment_createComment_comment;
}

export interface CreateComment {
  /**
   * Create a comment
   *
   * ### Error Codes
   *
   * - **C00001** - Post does not exist.
   */
  createComment: CreateComment_createComment;
}

export interface CreateCommentVariables {
  input: CreateCommentInput;
}
