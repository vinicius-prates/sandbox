import styled from 'styled-components'
export const Card = (props) => {

    return( 
        <DivContent>
            <DivImg>
                <img src={props.image}/>
            </DivImg>
            <DivSneakerInfo>
                <h1>{props.name}</h1>
                <h1>R$ {props.price}</h1>
                <h3>{props.releaser_year}</h3>
                <h3>Condition - {props.condition}</h3>
                <h2>{props.brand}</h2>
            </DivSneakerInfo>


        </DivContent>
    )
}

const DivContent = styled.div`
    background-color: #383838;
    border-radius: 12px;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


`
const DivImg = styled.div`

    img{
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        width: 300px;
        height: 300px;
    }
`

const DivSneakerInfo = styled.div`
    padding: 10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;

    width: 280px;
    color: whitesmoke;
    background-color: #383838;

    h1 {
        letter-spacing: 2px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    h2{
        text-align: center;
        color: whitesmoke;
    }
    h3{
        padding: 0 10px 0 10px;
        font-weight: lighter;
        opacity: 0.8;
    }
`
