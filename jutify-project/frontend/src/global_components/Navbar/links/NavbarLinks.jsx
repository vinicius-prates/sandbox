import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarLinks = ({ name, link = "/" }) => {
    return (
        <Links><Link to={link}>{name}</Link></Links>
    )
}

const Links = styled.div`
    font-size: 20px;
    cursor: pointer;
    transition: 250ms;

    & > a{
        text-decoration: none;
        color: black;

        &:hover{
            color: #2D7DB5
        }
    }
`;
