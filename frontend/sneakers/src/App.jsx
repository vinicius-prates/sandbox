import styled from 'styled-components'
import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer';

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
          <DivCard key={index}><Card image={item.image} name={item.name} price={item.price} releaser_year={item.releaser_year} condition={item.condition} brand={item.brand} /></DivCard>
        ))}
       </DivAllSneakers>

       <Footer/>
    </>
   
  )
}

const DivAllSneakers = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3vw;
  margin: 0 20px 0 20px;
`

const DivCard = styled.div`

    

`

export default App
