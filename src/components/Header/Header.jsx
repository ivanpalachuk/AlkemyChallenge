import Search from '../Search/Search';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Alkemy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listado">Listado de Peliculas</Nav.Link>
            <Nav.Link href="/favourites">Favoritos</Nav.Link>
          </Nav>
          <Search />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header