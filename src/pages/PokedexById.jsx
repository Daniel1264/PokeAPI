import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexbyid/Pokemon404'
import './styles/pokedexbyid.css'
import image from  '../../public/images/home/pokedex.png'

const PokedexById = () => {

  // this state contains a pokemon in specific
  const [pokemon, setPokemon] = useState()

  // this state is an error if the user write a pokemon incorrect
  const [hasError, setHasError] = useState(false)

  // this const is a params that the component pokedexbyid contains
  const {id} = useParams()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => {
      console.log(err);
      setHasError(true)
    })
  }, [])

  // this conditional return an error if th user does not write pokemon well

  if(hasError) {
    return <Pokemon404 />
  }

  console.log(pokemon);


  return (
    <article className='pokemon'>
    <img src={image} className='pokemon_img' data-aos="fade-down" />
      <header className={`pokemon_header bg_${pokemon?.types[0].type.name}`} >
        <img className='pokemon_header_img' src={pokemon?.sprites.other['official-artwork'].front_default} />
      </header>
      <section data-aos="fade-down">
        <h2 className={`pokemon_name letter_${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <div className='pokemon_information'>
          <li className='pokemon_information_height'>
            <h3>height</h3>
            <span>{pokemon?.height}</span>
          </li>
          <li className='pokemon_information_weight'>
            <h3>weight</h3>
            <span>{pokemon?.weight}</span>
          </li>
        </div>

        <div className='pokemon_features' data-aos="fade-down">

          <div className='pokemon_features_type'>
            <div className='pokemon_features_title'>
              <h2>type</h2>
            </div>
                <div className='type'>
            {
              pokemon?.types.map(type => (
                <span className={`type_name bg_${pokemon?.types[0].type.name}`}>{type.type.name } </span>
              ))
            }
                </div>
          </div>

          <div className='pokemon_features_abilities' data-aos="fade-down">
            <div className='pokemon_features_title'>
              <h2>abilities</h2>
            </div>
                <div className='ability'>
            {
              pokemon?.abilities.map(ability => (
                <span className='type_name'>{ability.ability.name} </span>
              ))
            }
                </div>
          </div>
        </div>

        <div className='pokemon_stats'>
        <h2>Stats</h2>
            {
              pokemon?.stats.map(stat => (
                <div className='stat_information'>
                  <div className='stat_information_text'>
                    <span >{stat.stat.name}</span>
                    <span>{stat.base_stat} / 150</span>
                  </div>
                  <div className='stat_information_progress'>
                    <progress data-aos="fade-down" className={`progress bg_${pokemon?.types[0].type.name}`} value={stat.base_stat} max='150'></progress>
                  </div>
                </div>
              ))
            }
        </div>
        <h2>Moves</h2>
        <div className='pokemon_moves'>
          {
            pokemon?.moves.map(move => (
              <span data-aos="fade-down" className={`pokemon_move_span bg_${pokemon?.types[0].type.name}`}>{move.move.name} </span>
            ))
          }
        </div>
      </section>
    </article>
  )
}

export default PokedexById
