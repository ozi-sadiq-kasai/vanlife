import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Homes"
import Adult from "./pages/Adult"
import Children from "./pages/Children"
// import Cart from "./pages/Cart"

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adult' element={<Adult/>}/>
      <Route path='/children' element={<Children/>}/>
     </Routes>
    </Router>
  )
}

export default App


