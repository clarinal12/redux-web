/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCreatorPostWithOutAuth
// ====================================================

export interface GetCreatorPostWithOutAuth_node_AdminAccount {
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

export interface GetCreatorPostWithOutAuth_node_Post_creator_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetCreatorPostWithOutAuth_node_Post_creator {
  __typename: 'CreatorAccount';
  username: string | null;
  image_next: GetCreatorPostWithOutAuth_node_Post_creator_image_next | null;
}

export interface GetCreatorPostWithOutAuth_node_Post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface GetCreatorPostWithOutAuth_node_Post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges_node_AdminAccount {
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

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_AdminAccount {
  __typename: 'AdminAccount';
}

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_CreatorAccount_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
  image_next: GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_CreatorAccount_image_next | null;
}

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_FollowerAccount {
  __typename: 'FollowerAccount';
  id: string;
  emailAddress: any | null;
}

export type GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account =
  | GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_AdminAccount
  | GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_CreatorAccount
  | GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account_FollowerAccount;

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment {
  __typename: 'Comment';
  account: GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment_account;
  id: string;
  createdAt: any;
  message: string;
}

export type GetCreatorPostWithOutAuth_node_Post_comments_edges_node =
  | GetCreatorPostWithOutAuth_node_Post_comments_edges_node_AdminAccount
  | GetCreatorPostWithOutAuth_node_Post_comments_edges_node_Comment;

export interface GetCreatorPostWithOutAuth_node_Post_comments_edges {
  __typename: 'Edge';
  node: GetCreatorPostWithOutAuth_node_Post_comments_edges_node;
}

export interface GetCreatorPostWithOutAuth_node_Post_comments {
  __typename: 'Connection';
  edges: GetCreatorPostWithOutAuth_node_Post_comments_edges[];
  totalCount: number;
}

export interface GetCreatorPostWithOutAuth_node_Post {
  __typename: 'Post';
  creator: GetCreatorPostWithOutAuth_node_Post_creator;
  message: string | null;
  likesCount: number;
  createdAt: any;
  embed: any | null;
  thumbnail: GetCreatorPostWithOutAuth_node_Post_thumbnail | null;
  contents: GetCreatorPostWithOutAuth_node_Post_contents[] | null;
  comments: GetCreatorPostWithOutAuth_node_Post_comments;
}

export type GetCreatorPostWithOutAuth_node =
  | GetCreatorPostWithOutAuth_node_AdminAccount
  | GetCreatorPostWithOutAuth_node_Post;

export interface GetCreatorPostWithOutAuth {
  node: GetCreatorPostWithOutAuth_node | null;
}

export interface GetCreatorPostWithOutAuthVariables {
  id: string;
}
