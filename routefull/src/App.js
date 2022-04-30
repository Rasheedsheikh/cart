import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path ="/" element={<Home/>}/>
         <Route path ="/login" element={<Login/>}/>
         <Route path ="/about" element={<About/>}/>
         <Route path ="/cart" element={<Cart/>}/>
   
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
