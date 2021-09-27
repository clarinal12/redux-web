/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotificationType, AccountRole } from './globalTypes';

// ====================================================
// GraphQL query operation: CreatorAllNotifications
// ====================================================

export interface CreatorAllNotifications_notifications_edges_node_AdminAccount {
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
    | 'Link';
  id: string;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_post {
  __typename: 'Post';
  id: string;
  message: string | null;
  contents: CreatorAllNotifications_notifications_edges_node_CommentNotification_post_contents[] | null;
  embed: any | null;
  thumbnail: CreatorAllNotifications_notifications_edges_node_CommentNotification_post_thumbnail | null;
  deleted: boolean;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_comment {
  __typename: 'Comment';
  id: string;
  message: string;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  image_next: CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount_image_next | null;
}

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type CreatorAllNotifications_notifications_edges_node_CommentNotification_actor =
  | CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_AdminAccount
  | CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount
  | CreatorAllNotifications_notifications_edges_node_CommentNotification_actor_FollowerAccount;

export interface CreatorAllNotifications_notifications_edges_node_CommentNotification {
  __typename: 'CommentNotification';
  id: string;
  type: NotificationType;
  post: CreatorAllNotifications_notifications_edges_node_CommentNotification_post;
  comment: CreatorAllNotifications_notifications_edges_node_CommentNotification_comment;
  actor: CreatorAllNotifications_notifications_edges_node_CommentNotification_actor;
  createdAt: any;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_post {
  __typename: 'Post';
  id: string;
  message: string | null;
  contents: CreatorAllNotifications_notifications_edges_node_LikeNotification_post_contents[] | null;
  embed: any | null;
  thumbnail: CreatorAllNotifications_notifications_edges_node_LikeNotification_post_thumbnail | null;
  deleted: boolean;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  image_next: CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount_image_next | null;
}

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type CreatorAllNotifications_notifications_edges_node_LikeNotification_actor =
  | CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_AdminAccount
  | CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_CreatorAccount
  | CreatorAllNotifications_notifications_edges_node_LikeNotification_actor_FollowerAccount;

export interface CreatorAllNotifications_notifications_edges_node_LikeNotification {
  __typename: 'LikeNotification';
  id: string;
  type: NotificationType;
  post: CreatorAllNotifications_notifications_edges_node_LikeNotification_post;
  actor: CreatorAllNotifications_notifications_edges_node_LikeNotification_actor;
  createdAt: any;
}

export interface CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
}

export interface CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  image_next: CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount_image_next | null;
}

export interface CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type CreatorAllNotifications_notifications_edges_node_FollowNotification_actor =
  | CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_AdminAccount
  | CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_CreatorAccount
  | CreatorAllNotifications_notifications_edges_node_FollowNotification_actor_FollowerAccount;

export interface CreatorAllNotifications_notifications_edges_node_FollowNotification {
  __typename: 'FollowNotification';
  id: string;
  type: NotificationType;
  actor: CreatorAllNotifications_notifications_edges_node_FollowNotification_actor;
  createdAt: any;
}

export type CreatorAllNotifications_notifications_edges_node =
  | CreatorAllNotifications_notifications_edges_node_AdminAccount
  | CreatorAllNotifications_notifications_edges_node_CommentNotification
  | CreatorAllNotifications_notifications_edges_node_LikeNotification
  | CreatorAllNotifications_notifications_edges_node_FollowNotification;

export interface CreatorAllNotifications_notifications_edges {
  __typename: 'Edge';
  node: CreatorAllNotifications_notifications_edges_node;
}

export interface CreatorAllNotifications_notifications_pageInfo {
  __typename: 'PageInfo';
  hasNextPage: boolean;
  endCursor: any | null;
}

export interface CreatorAllNotifications_notifications {
  __typename: 'Connection';
  totalCount: number;
  edges: CreatorAllNotifications_notifications_edges[];
  pageInfo: CreatorAllNotifications_notifications_pageInfo;
}

export interface CreatorAllNotifications {
  notifications: CreatorAllNotifications_notifications;
}

export interface CreatorAllNotificationsVariables {
  first?: number | null;
  after?: any | null;
}
