/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Information() {
  let params = useParams()
  const [details, SetDetails] = useState({})
  const [active, setActive] = useState('instructions')


  const fetchDetails = async () => {

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

    const detailsData = await data.json()
    SetDetails(detailsData)
    console.log(detailsData)
  }
  useEffect(() => {
    fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name])


  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={active === 'instructions' ? 'active' : ''} onClick={() => setActive('instructions')}>Instructions</Button>
        <Button className={active === 'ingredients' ? 'active' : ''} onClick={() => setActive('ingredients')}>Ingridients</Button>

        {active === "instructions" && (
          <>
            <h2>Summary</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h2>Instructions</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </>
        )}

        {active === "ingredients" && (
          <>
            <h2>Ingredients</h2>
            <ul>
              {details.extendedIngredients.map((ingredient) =>
                <li key={ingredient.id}>{ingredient.original}</li>
              )}
            </ul>
          </>
        )}




      </Info>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 2rem;
  img{
    border-radius: 2rem;
    filter: saturate(1.8);
    width: 100%;
    min-height: 300px;
    
  }
  .active{
    background: linear-gradient(65deg,coral, #313131);
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
    list-style-type: circle;
  }
  ul{
    margin-top: 2rem;
    padding: 20px;
  }

  flex-direction: column;
  @media (max-width: 800px){
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #000;
  background: #cccc83;
  border: transparent;
  border-radius: 2rem;
  margin-right: 10px;
  font-weight: 600;
`
const Info = styled.div`

  h2{
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: coral;
  }
  h3, ol>li{
    font-size: 1.2rem;
  }
  h3{
    line-height: 2.5rem;
  }
`

export default Information