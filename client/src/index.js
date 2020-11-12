import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Auth0Provider } from "@auth0/auth0-react";

//Container
import App from '../src/components/App';

import '../src/Styles/custom.scss';

import * as serviceWorker from './serviceWorker';

const rootReactElement = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Auth0Provider
          domain="jcvzenith87.eu.auth0.com"
          clientId="Dx17h5qEjanG0ph5VlMeHADhxxWwxRmF"
          redirectUri="http://localhost:3000/messenger"
          audience="https://jcvzenith87.eu.auth0.com/api/v2/"
          scope="read:current_user update:current_user_metadata"
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

const target = document.getElementById('root');
render(rootReactElement, target);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
