import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from '@fortawesome/free-solid-svg-icons'

import './Ricetta.css'

export default function Ricetta() {
  return (
    <div className="ricetta">
        <div class="chiusuraRicetta"><FontAwesomeIcon icon={faXmark} /></div>    
        <h3>Modale ricetta</h3>
    </div>
  )
}
