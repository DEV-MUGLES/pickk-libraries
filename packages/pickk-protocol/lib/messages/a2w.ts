import { AppleClientType, UserProviderType } from '@pickk/common';

import { COMMON_AUTH_RESULT, APPLE_AUTH_RESULT } from '../constants';

/** A2W */
export type CommonAuthResultMessage = {
  name: typeof COMMON_AUTH_RESULT;
  body: {
    oauthProvider: UserProviderType;
    oauthCode: string;
  };
};

/** A2W */
export type AppleAuthResultMessage = {
  name: typeof APPLE_AUTH_RESULT;
  body: {
    clientType: AppleClientType;
    code: string;
  };
};
