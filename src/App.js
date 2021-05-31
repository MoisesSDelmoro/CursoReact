import React from 'react';
import {HashRouter} from 'react-router-dom'

import NavBar from '/home/moisesdelmoro/CursoReact/src/components/navbar'
import Rotas from './rotas'


function App() {
  return (
    <HashRouter>
      <div className="container">
        <NavBar/>
        <Rotas />
      </div>
    </HashRouter>
  );
}

export default App;
