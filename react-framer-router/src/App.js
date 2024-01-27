import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { AnimatePresence } from 'framer-motion'

const App = ()=>{
  const location = useLocation()

  return(
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location = {location} key = {location.pathname}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>

      
    </>
  )
}


export default App