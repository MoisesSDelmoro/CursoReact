import React from 'react';

import NavBar from './components/navbar'
import Home from './views/home'

function App() {
  return (
    <>
      <div className="container">
        <NavBar/>
        <Home />
      </div>
    </>
  );
}

export default App;
