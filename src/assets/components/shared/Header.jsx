import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/header.css'

const Footer = () => {

    const navigate = useNavigate()
    const handleToPokedex = () => {
        navigate(`/pokedex/`)
    }
    return (

        <div className='header__red'>
            <div className='header__black'></div>
            <img className='header__img' src="/images/pokedex.png" alt="logo pokedex" onClick={handleToPokedex} />
            <div className='header__circle'>
                <div className='header__circle-int'></div>
            </div>
        </div>

    )
}

export default Footer