import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavsProvider } from "./context/FavsContext"

import Login from "./components/Login/Login"
import Listado from "./components/Listado/Listado"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Detail from "./components/Detail/Detail"
import SearchResults from "./components/SearchResults/SearchResults"
import Favourites from "./components/Favourites/Favourites"


import "./css/App.css"
import "./css/bootstrap.min.css"


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <FavsProvider>
          <Header />
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/resultados/:keyword" element={<SearchResults />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
          <Footer />
        </FavsProvider>
      </BrowserRouter>
    </div>

  )
}

export default App
