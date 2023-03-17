import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import axios from 'axios'

const Detail = () => {

    let { id } = useParams()

    const [movie, setMovie] = useState(null)

    const dosDecimales = (n) => {
        let t = n.toString();
        let regex = /(\d*.\d{0,2})/;
        return t.match(regex)[0];
    }

    useEffect(() => {

        const endPointID = `https://api.themoviedb.org/3/movie/${id}?api_key=7caf46531396de643008db1c668fdc90&language=es`

        axios.get(endPointID)
            .then(res => {
                const movieData = res.data
                setMovie(movieData)
            })
            .catch(err => {
                console.log(err)
            })

    }, [id])

    return (

        <>

            {!movie && <Spinner />}
            {movie &&
                <>
                    <h2>{movie.title}</h2>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="MoviePoster" />
                        </div>
                        <div className='col-8'>
                            <h5>Fecha de estreno: {movie.release_date}</h5>
                            <h5>Reseña:</h5>
                            <p>{movie.overview}</p>
                            <h5>Rating: {dosDecimales(movie.vote_average)}</h5>
                            <h5>Generos:</h5>
                            <ul>
                                {movie.genres.map(oneGenre =>

                                    <li key={oneGenre.id}>
                                        {oneGenre.name}
                                    </li>)}

                            </ul>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Detail