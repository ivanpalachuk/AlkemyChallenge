import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavsProvider } from "./context/FavsContext"

import Login from "./components/Login/Login"
import Listado from "./components/Listado/Listado"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Detail from "./components/Detail/Detail"
import SearchResults from "./components/SearchResults/SearchResults"
import Favourites from "./components/Favourites/Favourites"
import Landing from "./components/Landing/Landing"


import "./css/App.css"
import "./css/bootstrap.min.css"
import TopRated from "./components/TopRated/TopRated"


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <FavsProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route index path="/" element={<Landing />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/resultados/:keyword" element={<SearchResults />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/toprated" element={<TopRated />} />
          </Routes>
          <Footer />
        </FavsProvider>
      </BrowserRouter>
    </div>

  )
}

export default App
