import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputsearch.css'

const InputSearch = () => {

  // this component is a form that allows to realize the search of a pokemon for name or id

    const navigate = useNavigate()

    // the function submit search a pokemon and return this pokemon
    const submit = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}/`)
    }
  return (
    <form onSubmit={submit} className = 'form'>
        <input className='form_input' id='search' type='text' placeholder='search a pokemon'/>
        <button className='form_button'>Search</button>
    </form>
  )
}

export default InputSearch
