import React from 'react';
import { Extension } from '/libs/socket';
import { Route, Navigate } from 'react-router-dom';

const useLocalStorage = (name: string) => {
  const [value, $setValue] = React.useState(localStorage.getItem(name) || null);

  const setValue = React.useCallback((value: string) => {
    $setValue(value);
    localStorage.setItem(name, value);
  }, [$setValue]);

  return [value, setValue];
};

const RedirectIfNotAuthenticated = () => {
  const [jwt, setJwt] = useLocalStorage('jwt');

  if (jwt === null) {
    return <Navigate to="/auth" />
  }

  return null;
};

const Auth = () => {
  return (
    <div>
      <h1>Authenticate please</h1>
      <button>Login with github</button>
    </div>
  );
};

export default (router) => {
  return [(
    <Extension name="auth" socket={router}>
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<RedirectIfNotAuthenticated />} />
    </Extension>
  )];
};
