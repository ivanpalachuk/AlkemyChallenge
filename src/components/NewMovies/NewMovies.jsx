import MovieList from '../MovieList/MovieList';
import { useFavs } from '../../context/FavsContext';

function NewMovies(props) {

    const { apiCall, moviesList } = useFavs()

    apiCall(props.url)

    const movies = moviesList


    return (
        <>

            <MovieList movies={movies} />
        </>
    )
}

export default NewMovies



