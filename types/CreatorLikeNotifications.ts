/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotificationType, AccountRole } from './globalTypes';

// ====================================================
// GraphQL query operation: CreatorLikeNotifications
// ====================================================

export interface CreatorLikeNotifications_notifications_edges_node_AdminAccount {
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
    | 'FollowNotification';
  id: string;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_post {
  __typename: 'Post';
  id: string;
  message: string | null;
  contents: CreatorLikeNotifications_notifications_edges_node_LikeNotification_post_contents[] | null;
  embed: any | null;
  thumbnail: CreatorLikeNotifications_notifications_edges_node_LikeNotification_post_thumbnail | null;
  deleted: boolean;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  image_next: CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount_image_next | null;
}

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor =
  | CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_AdminAccount
  | CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount
  | CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor_FollowerAccount;

export interface CreatorLikeNotifications_notifications_edges_node_LikeNotification {
  __typename: 'LikeNotification';
  id: string;
  type: NotificationType;
  post: CreatorLikeNotifications_notifications_edges_node_LikeNotification_post;
  actor: CreatorLikeNotifications_notifications_edges_node_LikeNotification_actor;
  createdAt: any;
}

export type CreatorLikeNotifications_notifications_edges_node =
  | CreatorLikeNotifications_notifications_edges_node_AdminAccount
  | CreatorLikeNotifications_notifications_edges_node_LikeNotification;

export interface CreatorLikeNotifications_notifications_edges {
  __typename: 'Edge';
  node: CreatorLikeNotifications_notifications_edges_node;
}

export interface CreatorLikeNotifications_notifications_pageInfo {
  __typename: 'PageInfo';
  hasNextPage: boolean;
  endCursor: any | null;
}

export interface CreatorLikeNotifications_notifications {
  __typename: 'Connection';
  totalCount: number;
  edges: CreatorLikeNotifications_notifications_edges[];
  pageInfo: CreatorLikeNotifications_notifications_pageInfo;
}

export interface CreatorLikeNotifications {
  notifications: CreatorLikeNotifications_notifications;
}

export interface CreatorLikeNotificationsVariables {
  first?: number | null;
  after?: any | null;
}
