import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'


const Trending = () => {

    // eslint-disable-next-line no-unused-vars
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getTrending()
    }, [])

    const getTrending = async () => {
        
            const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=21`
            );
            const data = await api.json()

            setTrending(data.recipes)
            // console.log(data.recipes)
    }
    return (
        <div>
            <Wrapper>
                <h3>Trending Items</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '3rem'
                }}>
                    {trending.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                <Link to={'/recipe/'+recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient/>
                                </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0; 
    h3{
        margin:2rem;
    }
`
const Card = styled.div`
    min-height: 23rem;
    overflow: hidden;
    position:relative;
    img{
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit: cover;
        border-radius: 3rem;
    }
    p{
        position:absolute;
        z-index:10;
        text-decoration:underline;
        bottom: 0%;
        color: #fff;
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
    const Gradient = styled.div`
        z-index:3;
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5));
    `

export default Trending