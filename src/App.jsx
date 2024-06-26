import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Home from "./pages/Home/Home.jsx"
import Video from "./pages/Video/Video.jsx"
const App = () => {

  const [sidebar, setSidebar]  = useState(true)
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar setSidebar = {setSidebar} setQuery={setQuery}/>
      <Routes>
        <Route path="/" element={<Home sidebar = {sidebar} query={query}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App;