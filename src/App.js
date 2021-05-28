import React from 'react';

function App (props) {

  const modificarNome = event => {
    console.log(event.target.value)
  }  
  const criaComboBox = () => {
    const opcoes = ["Moises", "Delmoro", "Santos"]
    const comboBoxOpcoes = opcoes.map(opcao=><option>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

    const MeuComboBox = () => criaComboBox()
    
    return (
      <>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1>Hello {props.nome} </h1>
      <MeuComboBox />
      </>
    
    )
}

export default App;
