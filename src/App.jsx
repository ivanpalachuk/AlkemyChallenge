import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { FavsProvider } from "./context/FavsContext"
import { AuthProvider } from "./context/AuthContext"
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
import Register from "./components/Register/Register"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"


import "./css/App.css"
import "./css/bootstrap.min.css"


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <AuthProvider>
          <FavsProvider>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route index path="/" element={<Landing url="https://api.themoviedb.org/3/discover/movie?api_key=7caf46531396de643008db1c668fdc90&language=es" />} />

              <Route
                path="/detail/:id"
                element={
                  <ProtectedRoute>
                    <Detail />
                  </ProtectedRoute>
                } />

              <Route path="/resultados/:keyword" element={<SearchResults />} />

              <Route
                path="/favourites"
                element={
                  <ProtectedRoute>
                    <Favourites />
                  </ProtectedRoute>
                } />

              <Route path="/novedades" element={<NewMovies url="https://api.themoviedb.org/3/discover/movie?api_key=7caf46531396de643008db1c668fdc90&language=es" />} />
              <Route
                path="/toprated"
                element={
                  <ProtectedRoute>
                    <TopRated url="https://api.themoviedb.org/3/movie/top_rated?api_key=7caf46531396de643008db1c668fdc90&language=es&page=1" />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/404" />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </FavsProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>

  )
}

export default App
