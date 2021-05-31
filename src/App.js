import React from 'react';

import NavBar from './components/navbar'
import Rotas from './rotas'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <NavBar/>
        <Rotas />
      </div>
    </React.Fragment>
  );
}

export default App;
