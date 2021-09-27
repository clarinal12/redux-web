import { gql } from '@apollo/client';

export const PROFILE = gql`
  query Profile($username: String!) {
    creatorAccount(username: $username) {
      ... on CreatorAccount {
        id
        role
        username
        description
        following
        image_next {
          id
          url
        }
        coverImage {
          id
          url
        }
        integrations {
          id
          type
          followersCount
          followingCount
          url
          details
        }
        links {
          id
          link
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      emailAddress
      role
      ... on Node {
        id
      }
      ... on CreatorAccount {
        id
        username
        description
        links {
          id
          link
          createdAt
        }
        nsfwEnabled
        coverImage {
          id
          url
        }
        image_next {
          id
          url
        }
        integrations {
          id
          type
          details
        }
      }
      ... on FollowerAccount {
        id
      }
    }
  }
`;
