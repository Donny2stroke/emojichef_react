import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from '@fortawesome/free-solid-svg-icons'
import ricettaTest from '../../images/testRicetta.jpg'
import './Ricetta.css'
import { AppContext } from '../App/App';

export default function Ricetta() {
  const contextValue = useContext(AppContext);

  function chiudiRicetta(){
    contextValue.modaleRicetta.setAperturaRicetta(0);
    contextValue.statoBottone.setBottoneDisabilitato(false);
  }

  return (
    <div className={contextValue.modaleRicetta.aperturaRicetta ? 'ricetta visibile':'ricetta'}>
        <div onClick={chiudiRicetta} class="chiusuraRicetta"><FontAwesomeIcon icon={faXmark} /></div>    
        <div className='contenutoRicetta'>
          <div className='contenutoFotoRicetta'>
            <img src={ricettaTest}/>
          </div>
          <div className='contenutoTestoRicetta'>
            <h1>Sauté di mele, bistecca e broccoli</h1>
            <h2>Ingredienti:</h2>
            <ul>
              <li><p>&#x1F34E; 1 mela verde</p></li>
              <li><p>&#x1F969; 200 grammi di bistecca di manzo</p></li>
              <li><p>&#x1F966; 1 mazzo di broccoli</p></li>
              <li><p>Sale e pepe q.b.</p></li>
              <li><p>2 cucchiai di olio d'oliva</p></li>
            </ul>
            <h2>Istruzioni:</h2>
            <ol>
              <li><p>Prepara gli ingredienti: lava e taglia a fette sottili la mela verde, affetta la bistecca di manzo a strisce sottili e separa i broccoli in cimette.</p></li>
              <li><p>In una padella grande, scalda un cucchiaio di olio d'oliva a fuoco medio-alto.</p></li>
              <li><p>Aggiungi le fette di mela e cuocile per circa 2-3 minuti, fino a quando iniziano a dorarsi leggermente. Rimuovi le fette di mela dalla padella e mettile da parte.</p></li>
              <li><p>Nella stessa padella, aggiungi l'altro cucchiaio di olio d'oliva e aggiungi la bistecca di manzo. Cuocila per circa 3-4 minuti, girandola occasionalmente, fino a quando è cotta al punto desiderato. Aggiusta di sale e pepe a piacere. Rimuovi la bistecca dalla padella e mettila da parte con le mele.</p></li>
              <li><p>Aggiungi le cimette di broccoli nella padella e cuocile per circa 5 minuti, finché non diventano tenere ma croccanti. Aggiusta di sale e pepe.</p></li>
              <li><p>Unisci le fette di mela e la bistecca di manzo alla padella con i broccoli. Mescola delicatamente per far amalgamare i sapori e cuoci per altri 1-2 minuti, finché tutti gli ingredienti sono ben riscaldati.</p></li>
              <li><p>Togli dal fuoco e servi il tuo sauté di mele, bistecca e broccoli caldo. Puoi accompagnarlo con riso o patate se desideri un piatto più sostanzioso.</p></li>
            </ol>
          </div>
        </div>
    </div>
  )
}
