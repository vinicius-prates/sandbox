import styled from 'styled-components'

export const Navbar = () => {

    return(
        <NavBar>
            <NavBarTittle>
                <a href="#">Sneakers Store</a>

            </NavBarTittle>
            <NavBarLinks>
                <a href=""> Sneakers</a>
                <a href="#">Contact</a>
                <a href="#">About Us</a>
            </NavBarLinks>


        </NavBar>
    )
}

const NavBar = styled.div`
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