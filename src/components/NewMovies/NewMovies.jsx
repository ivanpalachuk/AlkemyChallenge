import MovieList from '../MovieList/MovieList';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { FavsContext } from '../../context/FavsContext';

function NewMovies(props) {
    const { apiCall, moviesList } = useContext(FavsContext)
   
    apiCall(props.url)
    const token = sessionStorage.getItem("token")
    const movies = moviesList
    
    console.log(movies)
    return (
        <>
          {  /*{!token && <Navigate to="/" />}*/}
           <MovieList movies={movies}/>
        </>
    )
}

export default NewMovies



