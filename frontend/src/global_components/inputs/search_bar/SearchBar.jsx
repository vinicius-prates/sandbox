import styled from "styled-components"

export const SearchBar = () => {
    return (
        <>
            <Search type='text' />
        </>
    )
}

const Search = styled.input`
background-color: red;
`