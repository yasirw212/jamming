import React from 'react'
import './styles.css'
import logo from '../../assets/icons8-spotify-50.png'

export default function Navbar() {
  return (
    <div className='navbar text__gradient' >
        <h1 className='navbar-header'>Jamming </h1>
        <a href="#" className="navbar-brand"><img height={40} width={40} src={logo} alt="Spotify logo" /></a>
    </div>
  )
}
