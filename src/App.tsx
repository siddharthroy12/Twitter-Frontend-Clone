import React from 'react';
import Header from './components/Header'
import Home from './screens/Home'
import Notifications from './screens/Notifications'
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path='/notifications' component={Notifications}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </main>
        <SideBar />
        </Router>
      </div>
    </div>
  );
}

export default App;
