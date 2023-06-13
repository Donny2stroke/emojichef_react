import React, {createContext, useState} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Card from '../Card/Card'
import Ricetta from '../Ricetta/Ricetta';

export const AppContext = createContext(); 

function App() {
  const [ingredientiSelezionati, setIngredientiSelezionati] = useState(0);
  const [bottoneDisabilitato, setBottoneDisabilitato] = useState(true);
  const statoSelezionati = {ingredientiSelezionati, setIngredientiSelezionati};
  const statoBottone = {bottoneDisabilitato, setBottoneDisabilitato};
  const contextValue = {statoSelezionati, statoBottone}

  function ottieniRicetta(){
    if(ingredientiSelezionati < 3){
      alert("Seleziona 3 elementi");
    }else{
      alert("OK")
    }
  }

  //console.log(bottoneDisabilitato);
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className="page">
        <p>Elementi selezionati: {ingredientiSelezionati}</p>
        <p>Seleziona 3 ingredienti e genera la tua ricetta</p>
        <div className="containerCardEmoji">
          <Card id="mele" icona="🍎"/>
          <Card id="broccoli" icona="🥦"/>
          <Card id="pollo" icona="🍗"/>
          <Card id="ananas" icona="🍍"/>
          <Card id="cetrioli" icona="🥒"/>
          <Card id="carne" icona="🥩"/>
        </div>
        <button disabled={bottoneDisabilitato} onClick={ottieniRicetta}>Genera ricetta</button>
        <Ricetta />
      </div>
    </AppContext.Provider>
  );
}

export default App;
