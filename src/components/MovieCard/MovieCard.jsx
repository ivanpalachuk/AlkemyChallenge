import { useFavs } from '../../context/FavsContext';
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import Heart from '../Heart/Heart';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'react-circular-progressbar/dist/styles.css';
import "./MovieCard.css"


const MovieCard = (props) => {


    const { addOrRemoveFromFavs } = useFavs()



    return (

        <div className='col-2' key={props.movie.id} style={{ transition: "all ease 200ms" }}>

            <Card style={{
                width: '13rem',
                marginTop: '1 rem',
                marginBottom: "1rem",
                height: "36rem",
                display: "flex-box",
                transition: "all ease 200ms"

            }} className='cardh'
                datavote={props.movie.vote_average}

            >
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} style={{ height: "19rem" }} />
                <button className='favourite-btn' data-movie-id={props.movie.id} onClick={addOrRemoveFromFavs}><Heart faved={props.movie.id} /></button>
                <Card.Body style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start", justifyContent: "space-between" }} >
                    <Card.Title as="title" style={{ display: "block", fontWeight: "bolder", fontSize: "1.1rem" }}>{props.movie.title.substring(0, 20)}</Card.Title>
                    <Card.Text>
                        {props.movie.overview.substring(0, 90)}...
                    </Card.Text>
                    <div className="CircularProgressbar-text" style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f2f2f2",
                        borderRadius: "30px",
                        display: "flex",
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                        border: "none",

                    }}>
                        <CircularProgressbar value={props.movie.vote_average * 10} text={`${props.movie.vote_average * 10}%`} styles={{ text: { fontSize: "30px" } }} />
                    </div>
                    <Link to={`/detail/${props.movie.id}`}><Button variant="dark">Detalles</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )




}

export default MovieCard