import CarouselS from '../CarouselS/CarouselS';
import { Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import { FavsContext } from '../../context/FavsContext';

function Landing(props) {

    const { apiCall, moviesList } = useContext(FavsContext)

    useEffect(() => {
        apiCall(props.url);
    }, [props.url]);

    const token = sessionStorage.getItem("token")
    const movies = moviesList

    return (
        <>
            {!token && <Navigate to="/" />}
            <CarouselS movies={movies}/>
        </>
    )
}

export default Landing