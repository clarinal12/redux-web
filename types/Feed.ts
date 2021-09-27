/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostVisibilityType } from './globalTypes';

// ====================================================
// GraphQL query operation: Feed
// ====================================================

export interface Feed_posts_edges_node_AdminAccount {
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
  id: string;
}

export interface Feed_posts_edges_node_Post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface Feed_posts_edges_node_Post_contents {
  __typename: 'File';
  id: string;
  mimetype: string;
  url: any | null;
  blurhash: string | null;
}

export interface Feed_posts_edges_node_Post_comments {
  __typename: 'Connection';
  totalCount: number;
}

export interface Feed_posts_edges_node_Post_creator_image_next {
  __typename: 'File';
  url: any | null;
}

export interface Feed_posts_edges_node_Post_creator {
  __typename: 'CreatorAccount';
  username: string | null;
  image_next: Feed_posts_edges_node_Post_creator_image_next | null;
}

export interface Feed_posts_edges_node_Post {
  __typename: 'Post';
  id: string;
  embed: any | null;
  thumbnail: Feed_posts_edges_node_Post_thumbnail | null;
  contents: Feed_posts_edges_node_Post_contents[] | null;
  visibilityType: PostVisibilityType;
  likesCount: number;
  comments: Feed_posts_edges_node_Post_comments;
  creator: Feed_posts_edges_node_Post_creator;
  createdAt: any;
}

export type Feed_posts_edges_node = Feed_posts_edges_node_AdminAccount | Feed_posts_edges_node_Post;

export interface Feed_posts_edges {
  __typename: 'Edge';
  node: Feed_posts_edges_node;
}

export interface Feed_posts_pageInfo {
  __typename: 'PageInfo';
  hasNextPage: boolean;
  endCursor: any | null;
}

export interface Feed_posts {
  __typename: 'Connection';
  totalCount: number;
  edges: Feed_posts_edges[];
  pageInfo: Feed_posts_pageInfo;
}

export interface Feed {
  posts: Feed_posts;
}
