import CarouselS from '../Carousel/Carousel';
import { FavsContext } from '../../context/FavsContext';
import { useContext} from 'react';
import { Navigate } from 'react-router-dom';



function Landing(props) {

    console.log(props.url)
    const { apiCall, moviesList } = useContext(FavsContext)


    apiCall(props.url)

    const token = sessionStorage.getItem("token")
    const movies = moviesList


    return (
        <>
            {!token && <Navigate to="/login" />}
            <CarouselS movies={movies} />
        </>

    )
}




export default Landing;