/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFollowedCreators
// ====================================================

export interface GetFollowedCreators_me_AdminAccount {
  __typename: 'AdminAccount';
}

export interface GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node_AdminAccount {
  __typename:
    | 'AdminAccount'
    | 'Comment'
    | 'Post'
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

export interface GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node_CreatorAccount_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
  image_next: GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node_CreatorAccount_image_next | null;
}

export type GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node =
  | GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node_AdminAccount
  | GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node_CreatorAccount;

export interface GetFollowedCreators_me_FollowerAccount_followedCreators_edges {
  __typename: 'Edge';
  node: GetFollowedCreators_me_FollowerAccount_followedCreators_edges_node;
}

export interface GetFollowedCreators_me_FollowerAccount_followedCreators {
  __typename: 'Connection';
  edges: GetFollowedCreators_me_FollowerAccount_followedCreators_edges[];
  totalCount: number;
}

export interface GetFollowedCreators_me_FollowerAccount {
  __typename: 'FollowerAccount';
  followedCreators: GetFollowedCreators_me_FollowerAccount_followedCreators | null;
}

export interface GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node_AdminAccount {
  __typename:
    | 'AdminAccount'
    | 'Comment'
    | 'Post'
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

export interface GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node_CreatorAccount_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node_CreatorAccount {
  __typename: 'CreatorAccount';
  id: string;
  username: string | null;
  image_next: GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node_CreatorAccount_image_next | null;
}

export type GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node =
  | GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node_AdminAccount
  | GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node_CreatorAccount;

export interface GetFollowedCreators_me_CreatorAccount_followedCreators_edges {
  __typename: 'Edge';
  node: GetFollowedCreators_me_CreatorAccount_followedCreators_edges_node;
}

export interface GetFollowedCreators_me_CreatorAccount_followedCreators {
  __typename: 'Connection';
  edges: GetFollowedCreators_me_CreatorAccount_followedCreators_edges[];
  totalCount: number;
}

export interface GetFollowedCreators_me_CreatorAccount {
  __typename: 'CreatorAccount';
  followedCreators: GetFollowedCreators_me_CreatorAccount_followedCreators | null;
}

export type GetFollowedCreators_me =
  | GetFollowedCreators_me_AdminAccount
  | GetFollowedCreators_me_FollowerAccount
  | GetFollowedCreators_me_CreatorAccount;

export interface GetFollowedCreators {
  me: GetFollowedCreators_me;
}
