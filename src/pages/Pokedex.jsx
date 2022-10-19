import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css'
import image from  '../../public/images/home/pokedex.png'
import Pagination from '../components/pokedex/Pagination'


const Pokedex = () => {

  // this state contais a pokemons 
  const [pokemons, setPokemons] = useState()
  // This state stores the choice of type of pokemon to then make the request
  const [typeSelected, setTypeSelected] = useState('All pokemons' )

  // this useEffect makes the request depending on whether the user chooses one type or all

  useEffect(() => {
    if (typeSelected !== 'All pokemons') {
      axios.get(typeSelected)
      .then(res => {
        const result = res.data.pokemon.map(e => e.pokemon)
        setPokemons(result)
      })
      .catch(err => console.log(err))
    } else {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`
      axios.get(url)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  },  [typeSelected])

  const userName = useSelector((state) => state.userName)

  // pagination
  

  const [page, setPage] = useState(1)
  const [pokePorPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePorPage
  const finalPoke = page * pokePorPage

  const pagesLength = pokemons && Math.ceil(pokemons.length / pokePorPage)

  console.log(pagesLength);
  return (
    <div className='pokedex_pagina' data-aos="fade-down">
      <header>
        <img className='pokedex_img_title' src={image}/>
        <p className='pokedex_title_welcome'>welcome<span className='pokedex_title_name'> {userName}</span> here you can find your favorite pokemon!!</p>
      </header>
      <aside className='pokedex_search'>
        <InputSearch />
      <SelectByType setTypeSelected = {setTypeSelected} setPage = {setPage} />
      </aside>
      <Pagination
        pageslength = {pagesLength}
        page = {page}
        setPage = {setPage}
      />
      <main>
        <div className='card_container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
              <CardPoke 
                url = {pokemon.url}
                key = {pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex
