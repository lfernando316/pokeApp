import React from 'react'
import FormHome from '../home/FormHome'
import Footer from '../shared/Footer'
import './styles/home.css'


const Home = () => {
  return (
    <div className='pokedex'>
      <img className='pokedex__img' src="/images/pokedex.png" alt="logo pokedex" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
        <p className='pokedex__text'>Give me your name to see the pokedex</p>
      </header>
      <FormHome />
      <Footer />
    </div>

  )
}

export default Home