import styled from 'styled-components'

import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer';
import { Showsneakers } from './components/ShowSneakers/ShowSneakers'
function App() {

  

  return (
    <>
       <Navbar/>
        <Showsneakers/>

       <Footer/>
    </>
   
  )
}



export default App
