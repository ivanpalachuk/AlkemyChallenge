import { useContext } from 'react';
import { FavsContext } from '../../context/FavsContext';


const Heart = (props) => {

    const { favourites } = useContext(FavsContext)

    const isFavourite = () => {
        return (favourites.find(movie => movie.id === props.faved) ? true : false)
    }

    return (
        isFavourite() ? <div>❤️</div> : <div>🤍</div>
    )
}

export default Heart