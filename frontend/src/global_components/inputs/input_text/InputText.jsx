import styled from "styled-components"
import './inputStyle.css'

export const InputText = (props) => {
    if (!props.error){
        return (
            <input value={props.value} onChange={props.onchange} className="error" />
        )
    }
    return (
        <input value={props.value} onChange={props.onchange}/>
    )
}
