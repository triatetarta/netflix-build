import React from 'react';
import './App.scss';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginScreen />
            {/* <HomeScreen /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
