import React from 'react'
import { Link } from 'react-router-dom'

import "./MovieCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = (props) => {

    return (
        <div className='row'>
            {props.map((oneMovie, idx) => {
                return (
                    <div className='col-2' key={idx} style={{ transition: "all ease 200ms" }}>

                        <Card style={{
                            width: '13rem',
                            marginTop: '1 rem',
                            marginBottom: "1rem",
                            height: "36rem",
                            display: "flex-box",
                            transition: "all ease 200ms"

                        }} className='cardh'>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} style={{ height: "19rem" }} />
                            <button className='favourite-btn' data-movie-id={oneMovie.id} onClick={addOrRemoveFromFavs}>🖤</button>
                            <Card.Body style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start", justifyContent: "space-between" }} >
                                <Card.Title as="title" style={{ display: "block", fontWeight: "bolder", fontSize: "1.1rem" }}>{oneMovie.title.substring(0, 20)}</Card.Title>
                                <Card.Text>
                                    {oneMovie.overview.substring(0, 90)}...
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
                                    <CircularProgressbar value={oneMovie.vote_average * 10} text={`${oneMovie.vote_average * 10}%`} styles={{ text: { fontSize: "30px" } }} />
                                </div>
                                <Link to={`/detail/${oneMovie.id}`}><Button variant="dark">Detalles</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}

        </div>
    )
}

export default MovieCard