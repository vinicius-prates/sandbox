import { Card } from '../card/card';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
export const Showsneakers = () => {

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

    return(

        <DivAllSneakers>
        {apiresult.map((item, index) => (
          <DivCard key={index}><Card image={item.image} name={item.name} price={item.price} releaser_year={item.releaser_year} condition={item.condition} brand={item.brand} /></DivCard>
        ))}
       </DivAllSneakers>
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