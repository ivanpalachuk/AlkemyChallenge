import Carousel from 'react-bootstrap/Carousel';
import { FavsContext } from '../../context/FavsContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';



function Landing() {

    const { apiCall, moviesList } = useContext(FavsContext)
    apiCall("https://api.themoviedb.org/3/movie/top_rated?api_key=7caf46531396de643008db1c668fdc90&language=es&page=1")
    const token = sessionStorage.getItem("token")


    return (
        <>
            {!token && <Navigate to="/login" />}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""//{`https://image.tmdb.org/t/p/original/${moviesList[0].logo_path}`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}




export default Landing;