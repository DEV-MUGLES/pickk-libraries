import { UserProviderType } from '@pickk/common';

import { REQUEST_OAUTH_LOGIN } from '../constants';

/** W2A */
export type RequestLoginMessage = {
  name: typeof REQUEST_OAUTH_LOGIN;
  body: {
    oauthProvider: UserProviderType;
  };
};
