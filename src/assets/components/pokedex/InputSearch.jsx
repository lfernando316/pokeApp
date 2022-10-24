import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    e.target.search.value
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit} className="pokedex__form ">
      <input id='search' type="text" placeholder='Search a pokemon' className='pokedex__input' />
      <button className='pokedex__btn'>Search</button>
    </form>
  )
}

export default InputSearch