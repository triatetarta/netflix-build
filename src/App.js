import React, { useEffect } from 'react';
import './App.scss';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './Firebase';

const App = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
      }
    });

    return unsubscribe;
  }, []);

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
