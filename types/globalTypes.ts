/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccountRole {
  ADMIN = 'ADMIN',
  CREATOR = 'CREATOR',
  FOLLOWER = 'FOLLOWER',
}

export enum FileStatus {
  FAILED = 'FAILED',
  PROCESSING = 'PROCESSING',
  READY = 'READY',
}

export enum IntegrationType {
  BITCLOUT = 'BITCLOUT',
  TWITTER = 'TWITTER',
}

export enum NotificationType {
  BUY_BITCLOUT_CREATOR_COIN = 'BUY_BITCLOUT_CREATOR_COIN',
  COMMENT = 'COMMENT',
  FOLLOW = 'FOLLOW',
  LIKE = 'LIKE',
  SEND_TIP = 'SEND_TIP',
  UNFOLLOW = 'UNFOLLOW',
}

export enum OnboardingStep {
  CONNECT_ACCOUNT = 'CONNECT_ACCOUNT',
  CONNECT_EMAIL = 'CONNECT_EMAIL',
  CREATE_COIN_DROP = 'CREATE_COIN_DROP',
  CREATE_POST = 'CREATE_POST',
  EDIT_PROFILE = 'EDIT_PROFILE',
  ENABLE_REWARDS = 'ENABLE_REWARDS',
  SHARE_TO_BITCLOUT = 'SHARE_TO_BITCLOUT',
}

export enum PostVisibilityType {
  EVERYONE = 'EVERYONE',
  FOLLOWERS_ONLY = 'FOLLOWERS_ONLY',
}

export interface AuthenticateInput {
  emailAddress: any;
  otp: string;
}

export interface ConnectBitcloutInput {
  publicKey: string;
  jwt: string;
}

export interface ConnectTwitterInput {
  userToken: string;
  userSecret: string;
}

export interface CreateCommentInput {
  post: string;
  message: string;
}

export interface CreateCreatorAccountInput {
  emailAddress: any;
  otp: string;
  invitation: string;
}

export interface CreateFollowerAccountInput {
  emailAddress: any;
  otp: string;
}

export interface CreateLinkInput {
  link: any;
}

export interface CreatePostInput {
  message?: string | null;
  contents?: string[] | null;
  embed?: any | null;
  visibilityType?: PostVisibilityType | null;
}

export interface DeleteLinkInput {
  id: string;
}

export interface GenerateEmailOtpInput {
  emailAddress: any;
  invitation?: string | null;
}

export interface GenerateEmailOtpInput_next {
  emailAddress: any;
  urlQueryParams?: any | null;
}

export interface MarkOnboardingStepAsDoneInput {
  step: OnboardingStep;
}

export interface UpdateCommentInput {
  id: string;
  message: string;
}

export interface UpdateMeInput {
  username?: string | null;
  description?: string | null;
  nsfwEnabled?: boolean | null;
  image?: string | null;
  coverImage?: string | null;
}

export interface UpdatePostInput {
  message?: string | null;
  contents?: string[] | null;
  embed?: any | null;
  visibilityType?: PostVisibilityType | null;
}

export interface UploadFileInput {
  file: any;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
