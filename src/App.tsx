import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Recipes from "./components/Recipes"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App