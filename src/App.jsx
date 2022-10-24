import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/pages/Home'
import ProtectedRoutes from './assets/components/pages/ProtectedRoutes'
import Pokedex from './assets/components/pages/Pokedex'
import PokedexById from './assets/components/pages/PokedexById'
import Footer from './assets/components/shared/Footer'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={<PokedexById />} />
      </Routes>
    </div>
  )
}

export default App
