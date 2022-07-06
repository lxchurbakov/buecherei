import React from 'react';
import { Route } from 'react-router-dom';

import { EventEmitter } from '/libs/events';

export default ({ onRoutes, children }: { onRoutes: EventEmitter<null>, children: React.ReactNode }) => {
  return (
    <Route path="/" element={<>{children}</>}>
      <>{onRoutes.emitps(null)}</>
    </Route>
  );
};
