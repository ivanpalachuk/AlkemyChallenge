import Search from '../Search/Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logOut } = useAuth()

  const handleClick = () => { logOut() }

  return (
    <header style={{ marginBottom: "5rem" }}>
      <Navbar bg="dark" variant="dark" expand="md" fixed='top'>
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
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/novedades">Novedades</Nav.Link>
              <Nav.Link href="/toprated">Recomendadas</Nav.Link>
              <Nav.Link href="/favourites">Favoritos</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user ?
                <>
                  <Search />
                  <Button variant="danger" type="submit" href='/login' style={{ marginLeft: '10px' }} onClick={handleClick}>Logout</Button>
                </> :
                <>
                  <Button variant="success" type="submit" href='/login' style={{ marginRight: '10px' }} className='flex-grow-1'>Ingresa</Button>
                  <Button variant="outline-secondary" type="submit" href='/register' className='flex-grow-1'>Registrate</Button>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
