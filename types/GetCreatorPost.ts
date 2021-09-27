/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCreatorPost
// ====================================================

export interface GetCreatorPost_node_AdminAccount {
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

export interface GetCreatorPost_node_Post_creator_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetCreatorPost_node_Post_creator {
  __typename: 'CreatorAccount';
  username: string | null;
  image_next: GetCreatorPost_node_Post_creator_image_next | null;
}

export interface GetCreatorPost_node_Post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface GetCreatorPost_node_Post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface GetCreatorPost_node_Post_comments_edges_node_AdminAccount {
  __typename:
    | 'AdminAccount'
    | 'Post'
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

export interface GetCreatorPost_node_Post_comments_edges_node_Comment_account_AdminAccount {
  __typename: 'AdminAccount';
}

export interface GetCreatorPost_node_Post_comments_edges_node_Comment_account_CreatorAccount_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetCreatorPost_node_Post_comments_edges_node_Comment_account_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
  image_next: GetCreatorPost_node_Post_comments_edges_node_Comment_account_CreatorAccount_image_next | null;
}

export interface GetCreatorPost_node_Post_comments_edges_node_Comment_account_FollowerAccount {
  __typename: 'FollowerAccount';
  id: string;
  emailAddress: any | null;
}

export type GetCreatorPost_node_Post_comments_edges_node_Comment_account =
  | GetCreatorPost_node_Post_comments_edges_node_Comment_account_AdminAccount
  | GetCreatorPost_node_Post_comments_edges_node_Comment_account_CreatorAccount
  | GetCreatorPost_node_Post_comments_edges_node_Comment_account_FollowerAccount;

export interface GetCreatorPost_node_Post_comments_edges_node_Comment {
  __typename: 'Comment';
  account: GetCreatorPost_node_Post_comments_edges_node_Comment_account;
  id: string;
  createdAt: any;
  message: string;
}

export type GetCreatorPost_node_Post_comments_edges_node =
  | GetCreatorPost_node_Post_comments_edges_node_AdminAccount
  | GetCreatorPost_node_Post_comments_edges_node_Comment;

export interface GetCreatorPost_node_Post_comments_edges {
  __typename: 'Edge';
  node: GetCreatorPost_node_Post_comments_edges_node;
}

export interface GetCreatorPost_node_Post_comments {
  __typename: 'Connection';
  edges: GetCreatorPost_node_Post_comments_edges[];
  totalCount: number;
}

export interface GetCreatorPost_node_Post {
  __typename: 'Post';
  creator: GetCreatorPost_node_Post_creator;
  message: string | null;
  liked: boolean;
  likesCount: number;
  createdAt: any;
  embed: any | null;
  thumbnail: GetCreatorPost_node_Post_thumbnail | null;
  contents: GetCreatorPost_node_Post_contents[] | null;
  comments: GetCreatorPost_node_Post_comments;
}

export type GetCreatorPost_node = GetCreatorPost_node_AdminAccount | GetCreatorPost_node_Post;

export interface GetCreatorPost {
  node: GetCreatorPost_node | null;
}

export interface GetCreatorPostVariables {
  id: string;
}
