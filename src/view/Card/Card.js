import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../App/App';
import './Card.css'



function Card(props) {

  const contextValue = useContext(AppContext);
    
  function selezionaCard(e, contextValue){
      var cardCliccata = e.target;
      var classListCardCliccata = cardCliccata.classList;
    
      if(classListCardCliccata.contains('checked')){
        contextValue.statoSelezionati.setIngredientiSelezionati(contextValue.statoSelezionati.ingredientiSelezionati-1)
        classListCardCliccata.remove('checked');
      }else{
        if(contextValue.statoSelezionati.ingredientiSelezionati < 3){
          contextValue.statoSelezionati.setIngredientiSelezionati(contextValue.statoSelezionati.ingredientiSelezionati+1)
          classListCardCliccata.add('checked');
        }else{
          alert("non puoi selezionare più di 3 ingredienti");
        }
      }
  }
  
  useEffect(() => {  
    if(contextValue.statoSelezionati.ingredientiSelezionati<3){
      contextValue.statoBottone.setBottoneDisabilitato(true);
    }else{
      contextValue.statoBottone.setBottoneDisabilitato(false);
    }
  }, [contextValue.statoSelezionati.ingredientiSelezionati])
  
  
  return (
    <div onClick={(e)=>selezionaCard(e, contextValue)} className="card">
      <p id={props.id}>{props.icona}</p>
    </div>
  )
}

export default Card