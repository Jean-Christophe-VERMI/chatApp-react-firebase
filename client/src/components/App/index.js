import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "../Auth";
import PrivateRoute from "../PrivateRoute";

// Components
import HomePage from '../HomePage';
import Conversation from '../Conversation';
import Login from '../Login';
import Signup from '../Signup';
//import MessengerPage from '../MessengerPage';

// Containers
import MessengerPage from '../../containers/MessengerPage'

// Styles
import AppStyle from './AppStyle';


const App = () => (
  <AuthProvider>
    <AppStyle>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/connexion' component={Login} />
          <Route path='/inscription' component={Signup} />
          <PrivateRoute path='/messenger' component={MessengerPage} />
          <PrivateRoute exact path='/messenger/:conversationName' component={Conversation} />
        </Switch>
      </Router>
    </AppStyle>
  </AuthProvider>
);

export default App;