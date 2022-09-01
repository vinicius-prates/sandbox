import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {

    return(
        <NavBar>
            <NavBarTittle>
                <Link to='/'>Zimbas Sneakers </Link>

            </NavBarTittle>
            <NavBarLinks>
                <a href=""> Contact</a>
                <Link to="addsneaker">Add New Sneaker </Link>
            </NavBarLinks>


        </NavBar>
    )
}

const NavBar = styled.div`
    background-color: whitesmoke;
    margin: 2vw 5vw 2vw 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a{
        color: black; 
        text-decoration: none;
    }

`

const NavBarTittle = styled.div`

a{
    
    font-size: 50px;
    font-weight: bold;
}


`
const NavBarLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap:30px;

    a{
        font-size: 25px;
    }

`