import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselS(props) {

  return (
    <>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                      src={`https://image.tmdb.org/t/p/w500/22z44LPkMyf5nyyXvv8qQLsbom.jpg`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>LLaman a la puerta</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
          {/*  <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/w500/${props.movies[1].backdrop_path}`}
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
                    src={`https://image.tmdb.org/t/p/w500/${props.movies[2].backdrop_path}`}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
  </Carousel.Item>*/}
        </Carousel>
        </>
  )
}

export default CarouselS