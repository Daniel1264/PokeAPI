import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  // App is the component father

  return (
    <div className="App">

      <Footer />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route element = {<ProtectedRoutes />}>
        <Route path='/pokedex' element ={<Pokedex />}/>
        <Route path='/pokedex/:id' element ={<PokedexById />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
