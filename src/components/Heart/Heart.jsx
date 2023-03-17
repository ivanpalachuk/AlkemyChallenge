import { useFavs } from '../../context/FavsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Heart = (props) => {

    const { favourites } = useFavs()

    const isFavourite = () => {
        return (favourites.find(movie => movie.id === props.faved) ? true : false)
    }

    return (
        isFavourite() ?
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> :
            <FontAwesomeIcon icon={faHeart} style={{ color: 'white', stroke: 'black', strokeWidth: '30px' }} />
    )
}
export default Heart