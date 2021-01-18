import React from 'react';
import Header from './components/Header'
import Home from './screens/Home'
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Home />
        </main>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
