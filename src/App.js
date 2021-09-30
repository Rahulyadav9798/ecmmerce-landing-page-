import React,{useState} from 'react'
import './app.scss'
import Topbar from './components/navbar/Topbar';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
// import Products from './components/products/Products';
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
         <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <Home />
     {/* <Products /> */}
     </div>
      
    </div>
  );
}

export default App;
