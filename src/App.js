import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiMeal } from "react-icons/gi";
import Layout from "./components/Layout"; // Import the Layout component




function App() {
  return (
    <div className="App">
      <AppContainer>
        <BrowserRouter>
          <Layout>
          <Nav>
            <GiMeal />
            <Logo to={'/'}> Ready to Cook!</Logo>
          </Nav>
            <Search />
            <Category />
            <Pages />
          </Layout>
        </BrowserRouter>
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  padding: 0 2rem;
`

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #313131;
  padding-left: 1rem 0rem;
`;

const Nav = styled.div `
  padding: 5rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 3.5rem;
    color: #494949;
  }
`;

export default App;
