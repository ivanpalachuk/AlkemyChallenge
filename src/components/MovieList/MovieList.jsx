import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.css"

const MovieList = (props) => {
     
    return (
        <>
            <div className='row movielist'>
                {props.movies.map((movie, idx) => {
                    return (
                       <MovieCard movie={movie} key={idx}/>
                    )
                })}
            </div>
        </>
    )
}

export default MovieList