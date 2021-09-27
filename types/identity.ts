export type TIdentity = {
  id: string;
  method: string;
  service: string;
  payload: TIdentityPayload;
};

export type TIdentityPayload = {
  jwt?: string;
  signedTransactionHex?: string;
  publicKeyAdded: string;
  users: {
    [key: string]: TIdentityPayloadUser;
  };
};

export type TIdentityPayloadUser = {
  accessLevel: number;
  accessLevelHmac: string;
  btcDepositAddress: string;
  encryptedSeedHex: string;
  hasExtraText: boolean;
  network: string;
};
