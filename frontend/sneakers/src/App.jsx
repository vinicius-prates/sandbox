
import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'

function App() {

  const [apiresult, setApiresult] = useState([]);

    const fetchApi = () => {
        fetch("http://localhost:8000/sneakers/")
            .then((res) => res.json().then((data) => {
                setApiresult(data)
            }))
    }

    useEffect(() => {
        fetchApi()
    }, [])

  return (
    <>
       <Navbar/>
       <div>
        <h1>All Sneakers</h1>
        {apiresult.map((item, index) => (
          <div key={index}>{item.name} - {item.price} <img src={item.image}/></div>
        ))}
       </div>
    </>
   
  )
}

export default App
