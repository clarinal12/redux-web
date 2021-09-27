/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotificationType, AccountRole } from './globalTypes';

// ====================================================
// GraphQL query operation: CreatorFollowNotifications
// ====================================================

export interface CreatorFollowNotifications_notifications_edges_node_AdminAccount {
  __typename:
    | 'AdminAccount'
    | 'Comment'
    | 'Post'
    | 'CreatorAccount'
    | 'Fan'
    | 'FollowerAccount'
    | 'File'
    | 'Integration'
    | 'Invitation'
    | 'Link'
    | 'CommentNotification'
    | 'LikeNotification';
  id: string;
}

export interface CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
}

export interface CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  image_next: CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount_image_next | null;
}

export interface CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor =
  | CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_AdminAccount
  | CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount
  | CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor_FollowerAccount;

export interface CreatorFollowNotifications_notifications_edges_node_FollowNotification {
  __typename: 'FollowNotification';
  id: string;
  type: NotificationType;
  actor: CreatorFollowNotifications_notifications_edges_node_FollowNotification_actor;
  createdAt: any;
}

export type CreatorFollowNotifications_notifications_edges_node =
  | CreatorFollowNotifications_notifications_edges_node_AdminAccount
  | CreatorFollowNotifications_notifications_edges_node_FollowNotification;

export interface CreatorFollowNotifications_notifications_edges {
  __typename: 'Edge';
  node: CreatorFollowNotifications_notifications_edges_node;
}

export interface CreatorFollowNotifications_notifications_pageInfo {
  __typename: 'PageInfo';
  hasNextPage: boolean;
  endCursor: any | null;
}

export interface CreatorFollowNotifications_notifications {
  __typename: 'Connection';
  totalCount: number;
  edges: CreatorFollowNotifications_notifications_edges[];
  pageInfo: CreatorFollowNotifications_notifications_pageInfo;
}

export interface CreatorFollowNotifications {
  notifications: CreatorFollowNotifications_notifications;
}

export interface CreatorFollowNotificationsVariables {
  first?: number | null;
  after?: any | null;
}
