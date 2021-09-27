/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotificationType, AccountRole } from './globalTypes';

// ====================================================
// GraphQL query operation: CreatorCommentNotifications
// ====================================================

export interface CreatorCommentNotifications_notifications_edges_node_AdminAccount {
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
    | 'LikeNotification'
    | 'FollowNotification';
  id: string;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_post_contents {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_post_thumbnail {
  __typename: 'File';
  id: string;
  url: any | null;
  blurhash: string | null;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_post {
  __typename: 'Post';
  id: string;
  message: string | null;
  contents: CreatorCommentNotifications_notifications_edges_node_CommentNotification_post_contents[] | null;
  embed: any | null;
  thumbnail: CreatorCommentNotifications_notifications_edges_node_CommentNotification_post_thumbnail | null;
  deleted: boolean;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_comment {
  __typename: 'Comment';
  id: string;
  message: string;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_AdminAccount {
  __typename: 'AdminAccount';
  emailAddress: any | null;
  role: AccountRole;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount_image_next {
  __typename: 'File';
  id: string;
  url: any | null;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount {
  __typename: 'CreatorAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
  username: string | null;
  image_next: CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount_image_next | null;
}

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_FollowerAccount {
  __typename: 'FollowerAccount';
  emailAddress: any | null;
  role: AccountRole;
  id: string;
}

export type CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor =
  | CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_AdminAccount
  | CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_CreatorAccount
  | CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor_FollowerAccount;

export interface CreatorCommentNotifications_notifications_edges_node_CommentNotification {
  __typename: 'CommentNotification';
  id: string;
  type: NotificationType;
  post: CreatorCommentNotifications_notifications_edges_node_CommentNotification_post;
  comment: CreatorCommentNotifications_notifications_edges_node_CommentNotification_comment;
  actor: CreatorCommentNotifications_notifications_edges_node_CommentNotification_actor;
  createdAt: any;
}

export type CreatorCommentNotifications_notifications_edges_node =
  | CreatorCommentNotifications_notifications_edges_node_AdminAccount
  | CreatorCommentNotifications_notifications_edges_node_CommentNotification;

export interface CreatorCommentNotifications_notifications_edges {
  __typename: 'Edge';
  node: CreatorCommentNotifications_notifications_edges_node;
}

export interface CreatorCommentNotifications_notifications_pageInfo {
  __typename: 'PageInfo';
  hasNextPage: boolean;
  endCursor: any | null;
}

export interface CreatorCommentNotifications_notifications {
  __typename: 'Connection';
  totalCount: number;
  edges: CreatorCommentNotifications_notifications_edges[];
  pageInfo: CreatorCommentNotifications_notifications_pageInfo;
}

export interface CreatorCommentNotifications {
  notifications: CreatorCommentNotifications_notifications;
}

export interface CreatorCommentNotificationsVariables {
  first?: number | null;
  after?: any | null;
}
