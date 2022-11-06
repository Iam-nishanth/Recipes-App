import styled from "styled-components"
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SearchBar() {
    const [input, setInput]= useState('')
    const Navigate = useNavigate()

    const submit = (e)=>{
        e.preventDefault()
        Navigate('/searched/'+input)
    }

    return (
        <StyeldForm onSubmit={submit}>

            <div>
                <FaSearch></FaSearch>
                <input onChange={(e)=> setInput(e.target.value)} type='text' value={input} />
            </div>
        </StyeldForm>
    )
}

const StyeldForm = styled.form`
    margin: 0rem 6rem;

    div{
        position: relative;
        width: 60%;
        margin: 2rem auto;
    }
    
    input{
        border: none;
        background: linear-gradient(35deg,#494949, #ccc);
        font-size: 1rem;
        color: Whitesmoke;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width:100%;
    }
    svg{
        position: absolute;
        font-size: 1.2rem;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: black;
    }
`

export default SearchBar