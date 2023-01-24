import { useContext } from 'react';
import { FavsContext } from '../../context/FavsContext';
import { Card, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';


const Favourites = () => {

    let token = sessionStorage.getItem("token")
    const { favourites, addOrRemoveFromFavs } = useContext(FavsContext)

    return (
        <>
            {!token && <Navigate to="/" />}
            <div className='row'>
                {favourites.map((oneMovie, idx) => {
                    return (
                        <div className='col-2' key={idx}>
                            <Card style={{
                                width: '12rem',
                                marginTop: '1 rem',
                                marginBottom: "1rem",
                                height: "34rem",
                            }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
                                <button className='favourite-btn' data-movie-id={oneMovie.id} onClick={addOrRemoveFromFavs}>🖤</button>
                                <Card.Body >
                                    <Card.Title as="title">{oneMovie.title.substring(0, 15)}</Card.Title>
                                    <Card.Text>
                                        {oneMovie.overview.substring(0, 100)}...
                                    </Card.Text>
                                    <Link to={`/detail/${oneMovie.id}`}><Button variant="dark">Detalles</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}

            </div>
        </>
    )

}

export default Favourites