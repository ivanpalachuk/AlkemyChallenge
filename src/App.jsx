import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { FavsProvider } from "./context/FavsContext"

import Login from "./components/Login/Login"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Detail from "./components/Detail/Detail"
import SearchResults from "./components/SearchResults/SearchResults"
import Favourites from "./components/Favourites/Favourites"
import Landing from "./components/Landing/Landing"
import NewMovies from "./components/NewMovies/NewMovies"
import TopRated from "./components/TopRated/TopRated"
import NotFound from "./components/NotFound/NotFound"


import "./css/App.css"
import "./css/bootstrap.min.css"


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <FavsProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route index path="/" element={<Landing />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/resultados/:keyword" element={<SearchResults />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/novedades" element={<NewMovies url="https://api.themoviedb.org/3/discover/movie?api_key=7caf46531396de643008db1c668fdc90&language=es" />} />
            <Route path="/toprated" element={<TopRated url="https://api.themoviedb.org/3/movie/top_rated?api_key=7caf46531396de643008db1c668fdc90&language=es&page=1" />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
          <Footer />
        </FavsProvider>
      </BrowserRouter>
    </div>

  )
}

export default App
