import styled from 'styled-components'
import { Navbar } from '../../global_components/Navbar/Navbar'
import { InputsContainer } from './components/InputsContainer'

export const JustifyManage = () => {
    return (
        <Whole>
            <Navbar admin={true} />
            <InputsContainer />
        </Whole>
    )
}

const Whole = styled.div`
    height: 100vh;
    background-color: #EFF1F2;
`