import React from 'react'
import { Link } from 'react-router-dom'
import pikachu from '../../../public/images/pikachu.png'
import './styles/pokemon404.css'

const Pokemon404 = () => {

  // this component is the err404 show a user when a pokemon does not exist
  return (
    <div className='pokemon_err'>
    <div className='pokemon_err_container'>
      <img className='pokemon_err_img' src={pikachu} />
      <h2>Lo siento, el pokemon no se encontro</h2>
      <Link className='pokemon_err_link' to='/pokedex/'> ir a pokedex</Link>
    </div>
    </div>
  )
}

export default Pokemon404
