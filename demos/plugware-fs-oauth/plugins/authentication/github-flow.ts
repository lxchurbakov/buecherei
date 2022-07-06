import React from 'react';

const CLIENT_ID = String(process.env.GH_CLIENT_ID);
const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize';
const REDIRECT_URL = 'http://localhost:1234/auth'; // ???

const useSearchParam = (name: string, defaultValue: string | null) => {
  return [
    new URLSearchParams(window.location.search).get(name) || defaultValue,
    (value: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set(name, value);
      window.location.search = searchParams.toString();
    },
  ] as const;
};

export const useGithubAuthFlow = (cb: (code: string) => void) => {
  // First of all we initiate the flow by redirecting
  // user to a specific page
  const kickoff = React.useCallback(() => {
    window.open(`${GITHUB_OAUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=user:email`, '_blank');
  }, []);

  // Then we watch for a code from the query string
  // and, if it changes, we call the success callback
  const [code] = useSearchParam('code', null);

  React.useEffect(() => {
    if (code !== null) {
      cb(code);
    }
  }, [code]);

  return [kickoff];
};
