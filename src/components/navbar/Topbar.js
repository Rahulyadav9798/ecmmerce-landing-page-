import "./topbar.scss";
import Gemstone from '../../assets/gemstone.png'
import { Phone,Search,Person,Favorite,ShoppingCart } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <img src={Gemstone} alt="" />
            gemPundit

          </a>
          <div className="itemContainer">
            <Phone className="phone"/>
            +91 8398022977
          </div>
        </div>
        <div className="iconsContainer">
         <Search className="icon"/>
            <Person className="icon" />
            <Favorite className="icon" />
            <ShoppingCart className="icon" />
          </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
         
        </div>
      </div>
    </div>
  );
}
