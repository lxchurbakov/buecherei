import React from 'react';
import ReactDOM from 'react-dom/client';

import Card from '/components/atoms/card';

const node = document.getElementById('app') as any;

document.body.style.overflow = 'hidden';

node.style.width = '100vw';
node.style.height = '100vh';
node.style.display = 'flex';
node.style.flexDirection = 'column';
node.style.alignItems = 'center';
node.style.justifyContent = 'center';

const root = ReactDOM.createRoot(node);

root.render(
  <Card>
    Wtf
  </Card>
);
