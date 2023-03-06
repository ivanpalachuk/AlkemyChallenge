import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MovieList from "../MovieList/MovieList"


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
            <MovieList movies={movieResults} />
        </>
    )

}

export default SearchResults