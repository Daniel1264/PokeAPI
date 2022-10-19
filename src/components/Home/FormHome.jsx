import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/UserName.slice'

// The component FormHome is the register of user

const FormHome = () => {
    // in this component is used a state global that save the name of user for show in the component pokedex 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
        navigate('/pokedex')
    }
  return (
        <form onSubmit={submit} className='pokedex_form'>
            <input type='text' className="pokedex_input" placeholder="write your name"/>
            <button className="pokedex_btn">catch them all</button>
        </form>
  )
}

export default FormHome
