import styled from "styled-components"
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SearchBar() {
    const [input, setInput] = useState('')
    const Navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        Navigate('/searched/' + input)
    }

    return (
        <StyeldForm onSubmit={submit}>
            <div>
                <FaSearch />
                <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
            </div>
        </StyeldForm>
    )
}

const StyeldForm = styled.form`

    div{
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 2rem auto;
    }
    
    input{
        border: 2px solid #ddd;
        background-color: black;
        font-size: 1rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        width:100%;
    }
    svg{
        position: absolute;
        font-size: 1.2rem;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: #ddd;
    }
`

export default SearchBar