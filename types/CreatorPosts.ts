/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FileStatus, PostVisibilityType } from './globalTypes';

// ====================================================
// GraphQL query operation: CreatorPosts
// ====================================================

export interface CreatorPosts_me_AdminAccount {
  __typename: 'AdminAccount' | 'FollowerAccount';
}

export interface CreatorPosts_me_CreatorAccount_posts_edges_node_AdminAccount {
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

export interface CreatorPosts_me_CreatorAccount_posts_edges_node_Post_comments {
  __typename: 'Connection';
  totalCount: number;
}

export interface CreatorPosts_me_CreatorAccount_posts_edges_node_Post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface CreatorPosts_me_CreatorAccount_posts_edges_node_Post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
  status: FileStatus;
  createdAt: any;
}

export interface CreatorPosts_me_CreatorAccount_posts_edges_node_Post {
  __typename: 'Post';
  id: string;
  message: string | null;
  comments: CreatorPosts_me_CreatorAccount_posts_edges_node_Post_comments;
  embed: any | null;
  thumbnail: CreatorPosts_me_CreatorAccount_posts_edges_node_Post_thumbnail | null;
  contents: CreatorPosts_me_CreatorAccount_posts_edges_node_Post_contents[] | null;
  visibilityType: PostVisibilityType;
  likesCount: number;
  liked: boolean;
  createdAt: any;
  updatedAt: any;
}

export type CreatorPosts_me_CreatorAccount_posts_edges_node =
  | CreatorPosts_me_CreatorAccount_posts_edges_node_AdminAccount
  | CreatorPosts_me_CreatorAccount_posts_edges_node_Post;

export interface CreatorPosts_me_CreatorAccount_posts_edges {
  __typename: 'Edge';
  node: CreatorPosts_me_CreatorAccount_posts_edges_node;
}

export interface CreatorPosts_me_CreatorAccount_posts {
  __typename: 'Connection';
  totalCount: number;
  edges: CreatorPosts_me_CreatorAccount_posts_edges[];
}

export interface CreatorPosts_me_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  posts: CreatorPosts_me_CreatorAccount_posts;
}

export type CreatorPosts_me = CreatorPosts_me_AdminAccount | CreatorPosts_me_CreatorAccount;

export interface CreatorPosts {
  me: CreatorPosts_me;
}
