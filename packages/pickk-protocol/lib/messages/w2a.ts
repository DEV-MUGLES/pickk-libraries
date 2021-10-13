import { UserProviderType } from '@pickk/common';

import { REQUEST_OAUTH_LOGIN, SIGNIN_COMPLETE } from '../constants';

/** W2A */
export type RequestLoginMessage = {
  name: typeof REQUEST_OAUTH_LOGIN;
  body: {
    oauthProvider: UserProviderType;
  };
};

/** W2A */
export type SigninCompleteMessage = {
  name: typeof SIGNIN_COMPLETE;
  body: {
    accessToken: string;
  };
};
