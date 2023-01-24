import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SearchResults = () => {


    const { keyword } = useParams()
    const [movieResults, setMovieResults] = useState([])


    useEffect(() => {
        let endPoint = `https://api.themoviedb.org/3/search/movie?api_key=7caf46531396de643008db1c668fdc90&language=es&query=${keyword}`

        axios.get(endPoint)
            .then(response => {
                const moviesArray = response.data.results

                if (moviesArray.length !== 0) {
                    setMovieResults(moviesArray)
                } else if (moviesArray.length === 0) {
                    setMovieResults([])
                }

            }).catch(err => console.log(err))
    }, [keyword])


    return (
        <>
            {movieResults.length === 0 && <h2>Tu busqueda no arrojo resultados</h2>}
            <h2>Buscaste:<em>{keyword}</em></h2>
            <div className='row'>
                {movieResults.map((oneMovie, idx) => {
                    return (
                        <div className='col-2' key={idx}>
                            <Card style={{
                                width: '12rem',
                                marginTop: '1 rem',
                                marginBottom: "1rem",
                                height: "34rem",
                            }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
                                <Card.Body >
                                    <Card.Title>{oneMovie.title.substring(0, 15)}</Card.Title>
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

export default SearchResults