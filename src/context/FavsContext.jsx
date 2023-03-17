import { useState, createContext, useEffect, useContext } from "react";
import axios from "axios"

export const FavsContext = createContext()

export const useFavs = () => {
    const context = useContext(FavsContext)
    if (!context) throw new Error("There is not auth provider")
    return context
}


export function FavsProvider({ children }) {

    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const localMovies = localStorage.getItem('favs');

        if (localMovies !== null) {
            const favsArray = JSON.parse(localMovies);
            setFavourites(favsArray);
        }

    }, [])


    const addOrRemoveFromFavs = (e) => {

        const favMovies = localStorage.getItem("favs")

        let tempMoviesInFavs

        if (favMovies === null) {
            tempMoviesInFavs = [];
        } else {
            tempMoviesInFavs = JSON.parse(favMovies);
        }
        const btn = e.currentTarget
        const parent = btn.parentElement
        const poster_path = parent.querySelector("img").getAttribute("src")
        const overview = parent.querySelector("p").innerText
        const title = parent.querySelector("title").innerText
        const vote_average = parent.attributes[0].value
        const movieData = {
            poster_path,
            title,
            overview,
            id: btn.dataset.movieId * 1,
            vote_average,
        }


        let moviesIsInArray = tempMoviesInFavs.find(oneMovie => {
            return oneMovie.id === movieData.id
        });

        if (!moviesIsInArray) {
            tempMoviesInFavs.push(movieData);
            localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
            setFavourites(tempMoviesInFavs);

        } else {
            let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
                return oneMovie.id !== movieData.id
            });
            localStorage.setItem('favs', JSON.stringify(moviesLeft));
            setFavourites(moviesLeft);
        }

    }

    const [moviesList, setMovieList] = useState([])

    const apiCall = (url) => {
        useEffect(() => {
            const endPoint = url
            axios.get(endPoint)
                .then(res => {
                    const apiData = res.data
                    setMovieList(apiData.results)
                })
                .catch(err => {
                    console.log(err)
                })
        }, [setMovieList])
    }


    return (
        <FavsContext.Provider value={{ favourites, addOrRemoveFromFavs, apiCall, moviesList }}>
            {children}
        </FavsContext.Provider>
    )
}



