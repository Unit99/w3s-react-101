import {Routes, Route, useLocation} from 'react-router-dom'
import Nav from './components/shared/Nav'
import Home from './pages/Home'
import Folio from './pages/Folio'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'
import './App.css'

export default function App(){
  const location = useLocation()

  return(
    <>
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element = {<Home />} />
          <Route path='/folio' element = {<Folio />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}