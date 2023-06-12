import React from 'react'
import cuoco from '../../images/cuoco.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
        <div className="titolo">
          <h1>Emoji Chef</h1>
        </div>
        <div className="containerCuoco">
          <img src={cuoco}/>
        </div>
    </div>
  )
}
