import Search from '../Search/Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <header style={{ marginBottom: "5rem" }}>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
            <Nav.Link href="/toprated">Mas Valoradas</Nav.Link>
            <Nav.Link href="/favourites">Favoritos</Nav.Link>
          </Nav>
          <Search />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header