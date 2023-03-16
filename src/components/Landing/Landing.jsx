import CarouselS from '../CarouselS/CarouselS';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { FavsContext } from '../../context/FavsContext';

function Landing(props) {

    const { apiCall, moviesList } = useContext(FavsContext)

    apiCall(props.url)
    const movies = moviesList

    return (
        <>
            <CarouselS movies={movies} />
        </>
    )
}

export default Landing