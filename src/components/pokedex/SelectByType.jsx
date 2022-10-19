import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/selectbytype.css'
const SelectByType = ({setTypeSelected, setPage}) => {


    // this component is a selector of pokemons (select for type) 

    const url = 'https://pokeapi.co/api/v2/type/'

    
        // This state contain the information of the types of pokemons
    const [types, setTypes] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    },[])

    // the function handleChange make a request giving as value the choice

    const handleChange = (e) => {
        setTypeSelected(e.target.value)
        setPage(1)
    }
  return (
    <select onChange={handleChange} className='select'>
    <option value='All pokemons' className='select_title'>All pokemons</option>
        {
            types?.map((type) => (
                <option className='select_options' key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType
