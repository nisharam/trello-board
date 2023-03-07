import React from 'react';

import './App.css';
import TrelloBoard from './Board';

import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <TrelloBoard />
    </div>
  );
}

export default App;
