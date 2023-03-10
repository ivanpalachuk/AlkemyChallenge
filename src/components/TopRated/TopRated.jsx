import MovieList from '../MovieList/MovieList';
import { Navigate } from 'react-router-dom';
import { useContext,useEffect} from 'react'
import { FavsContext } from '../../context/FavsContext';


function TopRated(props) {

    const { apiCall, moviesList } = useContext(FavsContext)
    
    useEffect(() => {
        apiCall(props.url);
    }, [props.url]);

    const token = sessionStorage.getItem("token")
    const movies = moviesList

    return (
        <>
            {!token && <Navigate to="/" />}
            <MovieList movies={movies} />
        </>
    )
}

export default TopRated