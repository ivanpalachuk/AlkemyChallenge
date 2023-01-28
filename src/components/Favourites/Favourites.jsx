import { useContext } from 'react';
import { FavsContext } from '../../context/FavsContext';
import { Card, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Favourites = () => {

    let token = sessionStorage.getItem("token")
    const { favourites, addOrRemoveFromFavs } = useContext(FavsContext)
   
    return (
        <>
            {!token && <Navigate to="/" />}
            {!favourites.length && <>MENSAJE PARA BUSCAR FAVORITOS</>}
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
                                    <div style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "#f2f2f2",
                                        borderRadius: "30px",
                                        display: "flex",
                                        position: "absolute",
                                        right: "10px",
                                        bottom: "10px",
                                        border: "none",

                                    }}>
                                        <CircularProgressbar value={oneMovie.vote_average * 10} text={`${oneMovie.vote_average * 10}%`} styles={{ text: { fontSize: "30px" } }} />
                                    </div>
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