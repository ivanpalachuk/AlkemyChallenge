import { useState, createContext, useEffect } from "react";

export const FavsContext = createContext()

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
        const movieData = {
            poster_path,
            title,
            overview,
            id: btn.dataset.movieId
        }

        let moviesIsInArray = tempMoviesInFavs.find(oneMovie => {
            return oneMovie.id === movieData.id
        });

        if (!moviesIsInArray) {
            tempMoviesInFavs.push(movieData);
            localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
            setFavourites(tempMoviesInFavs);
            console.log('Se agrego a favs')

        } else {
            let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
                return oneMovie.id !== movieData.id
            });
            localStorage.setItem('favs', JSON.stringify(moviesLeft));
            setFavourites(moviesLeft);
            console.log('Se saco de favs')
        }

    }




    return (
        <FavsContext.Provider value={{ favourites, addOrRemoveFromFavs }}>
            {children}
        </FavsContext.Provider>
    )
}

