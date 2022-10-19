import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardpoke.css'

const CardPoke = ({url}) => {

    // Cardpoke is the component that contain a pokemon in specific

    // this state contain the information of pokemon

    const [pokemon, setPokemon] = useState()

    // the function useNavigate allows us to take another route in this case to component PokedexById
    const navigate = useNavigate()

    // this useEffect make the request to pokeAPI (pokemon for name or id )

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    },[])

    // The function handlClick allows us to take another route
    
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <article  onClick={handleClick} className={`card_poke border_${pokemon?.types[0].type.name}`}>
        <header className={`card_poke_header bg_${pokemon?.types[0].type.name}`}>
            <img className='card_poke_sprite' src={pokemon?.sprites.other['official-artwork'].front_default} />
        </header>
        <section className='card_poke_body'>
            <h3 className={`card_poke_name letter_${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='card_poke_types_container'>
                {
                    pokemon?.types.map((type) => (
                        <li key={type.slot} className='card_poke_type'>{type.type.name}</li>
                    ))
                }
            </ul>
            <p className='card_poke_type_label'>type</p>
        </section>
            <ul className='card_poke_stats_container'>
                {
                    pokemon?.stats.map((stat) => (
                        <li key={stat.stat.name} className='card_poke_stat'>
                        <span className='card_poke_stat_label'>{stat.stat.name}</span>
                        <span className={`card_poke_stat_number letter_${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
    </article>
  )
}

export default CardPoke
