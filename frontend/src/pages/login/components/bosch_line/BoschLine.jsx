import styled from 'styled-components'

export const BoschLine = () => {
    return (
        <Line>BOSCH LINE</Line>
    )
}

const Line = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: red;
`