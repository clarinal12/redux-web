/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikePost
// ====================================================

export interface LikePost_likePost_post {
  __typename: 'Post';
  id: string;
}

export interface LikePost_likePost {
  __typename: 'LikePostResponse';
  post: LikePost_likePost_post | null;
}

export interface LikePost {
  likePost: LikePost_likePost;
}

export interface LikePostVariables {
  id: string;
}
