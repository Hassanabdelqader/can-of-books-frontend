import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

import { useAuth0 } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="hasancanapp.us.auth0.com"
    clientId="gHqtxDmiZwESD5BdnSJa8GbzxW8mjz9W"
    redirectUri={window.location.origin}
  >
    <App />
    
  

  </Auth0Provider>,

  </React.StrictMode>
);
