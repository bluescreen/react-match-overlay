
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav nav-pills nav-justified m-4">
    <NavLink className="nav-item nav-link" to="/table">Tabelle</NavLink>
    <NavLink className="nav-item nav-link" to="/overlays">Overlays</NavLink>
    <NavLink className="nav-item nav-link" to="/preview">Stream Preview</NavLink>
    <NavLink className="nav-item nav-link" to="/shiaijo/A">A</NavLink>
    <NavLink className="nav-item nav-link" to="/shiaijo/B">B</NavLink>
    <NavLink className="nav-item nav-link" to="/shiaijo/C">C</NavLink>
    <NavLink className="nav-item nav-link" to="/shiaijo/D">D</NavLink>
    
  </nav>
)

export default Navigation