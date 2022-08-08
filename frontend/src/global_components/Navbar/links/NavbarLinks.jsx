import styled from "styled-components";

export const NavbarLinks = (props) => {
    return <Links>{props.name}</Links>
}

const Links = styled.div`
    font-size: 20px;
    cursor: pointer;
    transition: 250ms;

    &:hover{
       color: #2D7DB5
    }
`;
