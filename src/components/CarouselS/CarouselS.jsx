import Carousel from 'react-bootstrap/Carousel';
import Spinner from "react-bootstrap/Spinner"


function CarouselS(props) {
    console.log(props)
    return (
        props.movies.length > 0 ?
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500/${props.movies[0].backdrop_path}`}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{props.movies[0].title}</h3>
                            <p>{props.movies[0].overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500/${props.movies[1].backdrop_path}`}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>{props.movies[1].title}</h3>
                            <p>{props.movies[1].overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500/${props.movies[2].backdrop_path}`}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>{props.movies[2].title}</h3>
                            <p>{props.movies[2].overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
            :
            <Spinner animation='grow' />
    )
}

export default CarouselS