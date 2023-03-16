import { useContext } from 'react';
import { FavsContext } from '../../context/FavsContext';
import MovieList from '../MovieList/MovieList';
import LookingFavourites from '../LookingFavourites/LookingFavourites';

const Favourites = () => {


    const { favourites } = useContext(FavsContext)

    return (
        <>
            {!favourites.length && <LookingFavourites />}
            <MovieList movies={favourites} />
        </>
    )

}

export default Favourites