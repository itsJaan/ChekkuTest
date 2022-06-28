import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutingComponent from './components/RoutingComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutingComponent />
  </React.StrictMode>
);


