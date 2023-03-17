import Carousel from 'react-bootstrap/Carousel';
import Spinner from "react-bootstrap/Spinner"


function CarouselS(props) {

    return (
        props.movies.length > 0 ?
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original/${props.movies[0].backdrop_path}`}
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
                            src={`https://image.tmdb.org/t/p/original/${props.movies[1].backdrop_path}`}
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
                            src={`https://image.tmdb.org/t/p/original/${props.movies[2].backdrop_path}`}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>{props.movies[2].title}</h3>
                            <p>{props.movies[2].overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
            : <div style={{ display: 'flex', justifyContent: "center", marginTop: "17rem", marginBottom: "28.5rem" }}>
                <Spinner animation='grow' style={{ width: "5rem", height: "5rem" }} />
            </div>
    )
}

export default CarouselS