import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'




function Search() {

  const [Search, setSearch] = useState([])
  let params = useParams()


  const getSearch = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=100&query=${name}`)
    const recipes = await data.json()
    setSearch(recipes.results)
  }
  useEffect(() => {
    getSearch(params.searchitem)
  }, [params.searchitem])

  return (
    <Grid>
      {Search.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 30px;
`
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 3rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Search