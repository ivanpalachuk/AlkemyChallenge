import { useFavs } from '../../context/FavsContext';
import MovieList from '../MovieList/MovieList';
import LookingFavourites from '../LookingFavourites/LookingFavourites';

const Favourites = () => {


    const { favourites } = useFavs()

    return (
        <>
            {!favourites.length && <LookingFavourites />}
            <MovieList movies={favourites} />
        </>
    )

}

export default Favourites