
import './App.css'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Cert from "./page/Carts/Cert"
import Shop from './page/Shop/Shop'
import ContextShopProvider  from './Context/ContextShop'


function App() {
 

  return (
    <>
   
  <div className="app">
  <ContextShopProvider>
<Router>
  <Navbar/>
  <Routes>
    <Route  path="/"  element={ <Shop/> } />
    <Route  path="/cart"  element={<Cert/>} />
  </Routes>
</Router>
</ContextShopProvider>










  </div>
 
    </>
  )
}

export default App
