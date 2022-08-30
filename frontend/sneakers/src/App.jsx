import styled from 'styled-components'
import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
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


       <DivAllSneakers>
        {apiresult.map((item, index) => (
          <div key={index}><Card image={item.image} name={item.name} price={item.price} releaser_year={item.releaser_year} condition={item.condition} brand={item.brand} /></div>
        ))}
       </DivAllSneakers>
    </>
   
  )
}

const DivAllSneakers = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 3vw;
`

export default App
