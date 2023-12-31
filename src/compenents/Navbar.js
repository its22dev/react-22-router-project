import { useContext } from "react";
import { CartContext } from "../Store";
import { NavLink } from "react-router-dom";


const Navbar = ({ }) => {
  const [state] = useContext(CartContext);
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">甜點店</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'gray' : '',
                  }
                }}
                to='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'gray' : '',
                  }
                }}
                to='/about'>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'gray' : '',
                  }
                }}
                to='/products'>
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'gray' : '',
                  }
                }}
                to='/album'>
                Album
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-outline-success position-relative" type="submit">
            購物車
            <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">{state.CartList.length}</span>
          </button>
        </div>
      </div>
    </nav>
  </>
}


export default Navbar;