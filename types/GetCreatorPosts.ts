/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostVisibilityType } from './globalTypes';

// ====================================================
// GraphQL query operation: GetCreatorPosts
// ====================================================

export interface GetCreatorPosts_creatorAccount_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetCreatorPosts_creatorAccount_posts_edges_node_AdminAccount {
  __typename:
    | 'AdminAccount'
    | 'Comment'
    | 'CreatorAccount'
    | 'Fan'
    | 'FollowerAccount'
    | 'File'
    | 'Integration'
    | 'Invitation'
    | 'Link'
    | 'CommentNotification'
    | 'LikeNotification'
    | 'FollowNotification';
}

export interface GetCreatorPosts_creatorAccount_posts_edges_node_Post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface GetCreatorPosts_creatorAccount_posts_edges_node_Post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
  blurhash: string | null;
}

export interface GetCreatorPosts_creatorAccount_posts_edges_node_Post_comments {
  __typename: 'Connection';
  totalCount: number;
}

export interface GetCreatorPosts_creatorAccount_posts_edges_node_Post {
  __typename: 'Post';
  id: string;
  message: string | null;
  embed: any | null;
  thumbnail: GetCreatorPosts_creatorAccount_posts_edges_node_Post_thumbnail | null;
  contents: GetCreatorPosts_creatorAccount_posts_edges_node_Post_contents[] | null;
  likesCount: number;
  comments: GetCreatorPosts_creatorAccount_posts_edges_node_Post_comments;
  visibilityType: PostVisibilityType;
}

export type GetCreatorPosts_creatorAccount_posts_edges_node =
  | GetCreatorPosts_creatorAccount_posts_edges_node_AdminAccount
  | GetCreatorPosts_creatorAccount_posts_edges_node_Post;

export interface GetCreatorPosts_creatorAccount_posts_edges {
  __typename: 'Edge';
  node: GetCreatorPosts_creatorAccount_posts_edges_node;
}

export interface GetCreatorPosts_creatorAccount_posts {
  __typename: 'Connection';
  edges: GetCreatorPosts_creatorAccount_posts_edges[];
}

export interface GetCreatorPosts_creatorAccount {
  __typename: 'CreatorAccount';
  following: boolean;
  username: string | null;
  id: string;
  image_next: GetCreatorPosts_creatorAccount_image_next | null;
  posts: GetCreatorPosts_creatorAccount_posts;
}

export interface GetCreatorPosts {
  creatorAccount: GetCreatorPosts_creatorAccount | null;
}

export interface GetCreatorPostsVariables {
  username: string;
}
