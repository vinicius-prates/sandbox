import styled from "styled-components"
import SearchIcon from './assets/search-icon.png'

export const SearchBar = () => {
    return (
        <Search>
            <input type='text' placeholder="Pesquisar" />
            <button><img src={SearchIcon} /></button>
        </Search>
    )
}

const Search = styled.div`
display: flex;
align-items: center;

& > button{
    border-radius: 0;
    border: 0;
    cursor: pointer;
    background-color: white;
    padding: 12px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:active {
        box-shadow: 1px 1px 1px black inset;
    }

    & > img{
        height: 19px;
    }
}

& > input{
    border: 0;
    padding: 15px;
    width: 200px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 13px;

    &:focus{
        outline: 0;
        background-color: #f9f9f9;
    }
}
`