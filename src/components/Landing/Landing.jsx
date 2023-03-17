import CarouselS from '../CarouselS/CarouselS';
import { useFavs } from '../../context/FavsContext';

function Landing(props) {

    const { apiCall, moviesList } = useFavs()

    apiCall(props.url)
    const movies = moviesList

    return (
        <>
            <CarouselS movies={movies} />
        </>
    )
}

export default Landing