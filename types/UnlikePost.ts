/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnlikePost
// ====================================================

export interface UnlikePost_unlikePost_post {
  __typename: 'Post';
  id: string;
}

export interface UnlikePost_unlikePost {
  __typename: 'UnlikePostResponse';
  post: UnlikePost_unlikePost_post | null;
}

export interface UnlikePost {
  unlikePost: UnlikePost_unlikePost;
}

export interface UnlikePostVariables {
  id: string;
}
