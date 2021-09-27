/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFans
// ====================================================

export interface GetFans_me_AdminAccount {
  __typename: 'AdminAccount' | 'FollowerAccount';
}

export interface GetFans_me_CreatorAccount_fans_edges_node_AdminAccount {
  __typename:
    | 'AdminAccount'
    | 'Comment'
    | 'Post'
    | 'CreatorAccount'
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

export interface GetFans_me_CreatorAccount_fans_edges_node_Fan_account_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
}

export interface GetFans_me_CreatorAccount_fans_edges_node_Fan_account_CreatorAccount_image_next {
  __typename: 'File';
  url: any | null;
}

export interface GetFans_me_CreatorAccount_fans_edges_node_Fan_account_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  username: string | null;
  id: string;
  image_next: GetFans_me_CreatorAccount_fans_edges_node_Fan_account_CreatorAccount_image_next | null;
}

export interface GetFans_me_CreatorAccount_fans_edges_node_Fan_account_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  id: string;
}

export type GetFans_me_CreatorAccount_fans_edges_node_Fan_account =
  | GetFans_me_CreatorAccount_fans_edges_node_Fan_account_AdminAccount
  | GetFans_me_CreatorAccount_fans_edges_node_Fan_account_CreatorAccount
  | GetFans_me_CreatorAccount_fans_edges_node_Fan_account_FollowerAccount;

export interface GetFans_me_CreatorAccount_fans_edges_node_Fan {
  __typename: 'Fan';
  id: string;
  createdAt: any;
  likesCount: number;
  commentsCount: number;
  creatorCoinsHeldMarketValue: number;
  totalTipsSent: number;
  account: GetFans_me_CreatorAccount_fans_edges_node_Fan_account;
}

export type GetFans_me_CreatorAccount_fans_edges_node =
  | GetFans_me_CreatorAccount_fans_edges_node_AdminAccount
  | GetFans_me_CreatorAccount_fans_edges_node_Fan;

export interface GetFans_me_CreatorAccount_fans_edges {
  __typename: 'Edge';
  node: GetFans_me_CreatorAccount_fans_edges_node;
}

export interface GetFans_me_CreatorAccount_fans_pageInfo {
  __typename: 'PageInfo';
  endCursor: any | null;
  hasNextPage: boolean;
}

export interface GetFans_me_CreatorAccount_fans {
  __typename: 'Connection';
  edges: GetFans_me_CreatorAccount_fans_edges[];
  pageInfo: GetFans_me_CreatorAccount_fans_pageInfo;
  totalCount: number;
}

export interface GetFans_me_CreatorAccount {
  __typename: 'CreatorAccount';
  fans: GetFans_me_CreatorAccount_fans;
}

export type GetFans_me = GetFans_me_AdminAccount | GetFans_me_CreatorAccount;

export interface GetFans {
  me: GetFans_me;
}
