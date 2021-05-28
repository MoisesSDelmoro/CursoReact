import React from 'react';

class App extends React.Component {
  state = {
    nome: ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  render(){
    return (
      /* Outras opções para retornar vários nós */
      /* React.Fragment div */
      <>  
      <input type="text" value={this.state.nome} onChange={this.modificarNome} />
      <h1>Hello {this.state.nome} </h1>
      </> 
      /* /React.Fragment /div */
     )
  }
}

export default App;
