import MovieList from '../MovieList/MovieList';

import { useContext,useEffect} from 'react'
import { FavsContext } from '../../context/FavsContext';


function TopRated(props) {

    const { apiCall, moviesList } = useContext(FavsContext)
    
    
    
    apiCall(props.url)
    const movies = moviesList

    return (
        
            <MovieList movies={movies} />
       
    )
}

export default TopRated