import Categories from './Components/Categories';
import AllPages from './Components/Pages/AllPages';
import { BrowserRouter,Link } from 'react-router-dom'
import SearchBar from './Components/SearchBar';
import styled from 'styled-components';
import {GiForkKnifeSpoon} from 'react-icons/gi'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav>
        <GiForkKnifeSpoon></GiForkKnifeSpoon>
        <Logo to={'/'}>Simpler Recipies</Logo>
      </Nav>
        <SearchBar />
        <Categories />
        <AllPages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Pacifico', cursive;
  color: coral;
`
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`

export default App;
