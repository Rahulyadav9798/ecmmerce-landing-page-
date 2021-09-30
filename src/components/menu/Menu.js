import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#gemstones">Gemstones</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#calibratedgemtones">Calibrated Gemstones</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#gemrecommendation">Gem Recommendation</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#jewellery">Jewellery</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#customjewellery">Custom Jewellery</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#newarrivals">New Arrivals</a>
        </li>
      </ul>
    </div>
  );
}
