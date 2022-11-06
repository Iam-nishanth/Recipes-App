/* eslint-disable no-unused-vars */
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChickenOven} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Categories() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Indian'}>
            <GiChickenOven/>
            <h4>Indian</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiNoodles/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
    text-align: center;
    
`
const SLink = styled(NavLink)`
    display: flex;
    width: 4.5rem;
    height: 4.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    font-size: 0.6rem;
    background: linear-gradient(35deg, #ccc, coral);

    h4{
        margin-top: 0.5rem;
        color: black;
    }
    svg{
        font-size: 1.5rem;
        color: black;
    }
    &.active{
        background: linear-gradient(35deg, #fff, #14bbcb83);
    }
`

export default Categories