/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateCommentInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateComment
// ====================================================

export interface UpdateComment_updateComment_comment {
  __typename: 'Comment';
  message: string;
}

export interface UpdateComment_updateComment {
  __typename: 'UpdateCommentResponse';
  comment: UpdateComment_updateComment_comment;
}

export interface UpdateComment {
  updateComment: UpdateComment_updateComment;
}

export interface UpdateCommentVariables {
  input: UpdateCommentInput;
}
