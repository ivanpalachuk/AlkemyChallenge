import { useContext } from 'react';
import { FavsContext } from '../../context/FavsContext';
import MovieList from '../MovieList/MovieList';
import LookingFavourites from '../LokingFavourites/LookingFavourites';
import { Navigate } from 'react-router-dom';


const Favourites = () => {

    let token = sessionStorage.getItem("token")
    const { favourites } = useContext(FavsContext)

    return (
        <>
            {!token && <Navigate to="/" />}
            {!favourites.length && <LookingFavourites/>}
            <MovieList movies={favourites} />
        </>
    )

}

export default Favourites