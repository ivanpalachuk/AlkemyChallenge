import { Navigate, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { FavsContext } from '../../context/FavsContext';
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Listado() {

   
    const [moviesList, setMovieList] = useState([])
    const {addOrRemoveFromFavs} = useContext(FavsContext)
 
    useEffect(() => {
        const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=7caf46531396de643008db1c668fdc90&language=es"
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data
                setMovieList(apiData.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [setMovieList])



    const token = sessionStorage.getItem("token")
  

    return (
        <>
            {!token && <Navigate to="/" />}
            <div className='row'>
                {moviesList.map((oneMovie, idx) => {
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

export default Listado