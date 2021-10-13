import { UserProviderType } from '@pickk/common';

import {
  REQUEST_OAUTH_LOGIN,
  SIGN_IN_COMPLETE,
  SIGN_OUT_COMPLETE,
} from '../constants';

/** W2A */
export type RequestLoginMessage = {
  name: typeof REQUEST_OAUTH_LOGIN;
  body: {
    oauthProvider: UserProviderType;
  };
};

/** W2A */
export type SignInCompleteMessage = {
  name: typeof SIGN_IN_COMPLETE;
  body: {
    accessToken: string;
  };
};

/** W2A */
export type SignOutCompleteMessage = {
  name: typeof SIGN_OUT_COMPLETE;
};
