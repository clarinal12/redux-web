/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost_post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface UpdatePost_updatePost_post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface UpdatePost_updatePost_post {
  __typename: 'Post';
  id: string;
  message: string | null;
  embed: any | null;
  thumbnail: UpdatePost_updatePost_post_thumbnail | null;
  contents: UpdatePost_updatePost_post_contents[] | null;
}

export interface UpdatePost_updatePost {
  __typename: 'UpdatePostResponse';
  post: UpdatePost_updatePost_post;
}

export interface UpdatePost {
  /**
   * Update post
   * ###Error Code
   *
   * - **Z00006** - Some of the contents do not exist.
   */
  updatePost: UpdatePost_updatePost;
}

export interface UpdatePostVariables {
  id: string;
  input: UpdatePostInput;
}
