
import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'

function App() {

  const [apidetails, setApiDetails] = useState([])

  const ListarSneakers = () => {
    fetch ('http://127.0.0.1:8000/sneakers/').then(
      (res) =>  res.json().then(
        (data) => {
          setApiDetails(data)
        } )) 
  }

  useEffect(() => {
    ListarSneakers()
  }, [])

  return (
    <>
       <Navbar/>
       <div>
        <h1>All Sneakers</h1>
        {apidetails.map((item, index) => (
          <div>{item.name} - {item.price} </div>
        ))}
       </div>
    </>
   
  )
}

export default App
