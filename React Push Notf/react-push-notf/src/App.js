import React from 'react';
import './App.css';

import { askForPermissioToReceiveNotifications, initFirebaseMessagingRegistration } from './push-notification';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to the push-notification demo !</h1>
    </header>

    <h1>This is a test page</h1>
    <div id="token" ></div>
    <div id="message"></div>
    <div id="notification" ></div>
    <div id="error" ></div>

    <button onClick={initFirebaseMessagingRegistration} >
      Click here to receive notifications
    </button>
  </div>
);

export default App;
