import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../App/App';
import './Card.css'



function Card(props) {

  const contextValue = useContext(AppContext);
  const [numSelezionatiCorrenti, setNumSelezionatiCorrenti] = useState();
  
  function selezionaCard(e, contextValue){
      var cardCliccata = e.target;
      var classListCardCliccata = cardCliccata.classList;
    
      if(classListCardCliccata.contains('checked')){
        contextValue.statoSelezionati.setIngredientiSelezionati(contextValue.statoSelezionati.ingredientiSelezionati-1)
        classListCardCliccata.remove('checked');
        console.log(numSelezionatiCorrenti);
        setNumSelezionatiCorrenti(numSelezionatiCorrenti-1)
      }else{
        if(contextValue.statoSelezionati.ingredientiSelezionati < 3){
          contextValue.statoSelezionati.setIngredientiSelezionati(contextValue.statoSelezionati.ingredientiSelezionati+1)
          classListCardCliccata.add('checked');
          console.log(numSelezionatiCorrenti);
          setNumSelezionatiCorrenti(numSelezionatiCorrenti+1)
        }else{
          alert("non puoi selezionare più di 3 ingredienti");
        }
      }
  }
  
  useEffect(()=>{
    console.log(numSelezionatiCorrenti);
    if(numSelezionatiCorrenti<3){
      console.log("minore");
      contextValue.statoBottone.setBottoneDisabilitato(true);
    }else{
      console.log("uguale");
      contextValue.statoBottone.setBottoneDisabilitato(false);
    }
  }, [numSelezionatiCorrenti])
  
  return (
    <div onClick={(e)=>selezionaCard(e, contextValue)} className="card">
      <p id={props.id}>{props.icona}</p>
    </div>
  )
}

export default Card