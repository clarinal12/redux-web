/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput, PostVisibilityType } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost_post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface CreatePost_createPost_post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface CreatePost_createPost_post {
  __typename: 'Post';
  id: string;
  message: string | null;
  embed: any | null;
  thumbnail: CreatePost_createPost_post_thumbnail | null;
  visibilityType: PostVisibilityType;
  contents: CreatePost_createPost_post_contents[] | null;
}

export interface CreatePost_createPost {
  __typename: 'CreatePostResponse';
  post: CreatePost_createPost_post;
}

export interface CreatePost {
  /**
   * Create Post
   *
   * ###Error Code
   *
   * - **Z00005** - Some of the contents do not exist.
   * - **Z00008** - Must supply embed or contents.
   */
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  input: CreatePostInput;
}
