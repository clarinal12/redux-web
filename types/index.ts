/* eslint-disable @typescript-eslint/no-explicit-any */
export type EmptyObject = {
  [K in any]: never;
};

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage?: boolean;
  startCursor?: string;
  endCursor: string;
}

export interface Page<T = EmptyObject> {
  first: number;
  after: any;
  savedCursor: any[];
  currentPage: number;
  filter?: T;
  [key: string]: any;
}

export interface BitcloutIdentityPayloadUser {
  accessLevel: number;
  accessLevelHmac: string;
  btcDepositAddress: string;
  encryptedSeedHex: string;
  hasExtraText: boolean;
  network: string;
}

export interface BitcloutIdentityPayload {
  jwt?: string;
  signedTransactionHex?: string;
  publicKeyAdded: string;
  users: {
    [key: string]: BitcloutIdentityPayloadUser;
  };
}

export interface BitcloutIdentity {
  id: string;
  method: string;
  service: string;
  payload: BitcloutIdentityPayload;
}
