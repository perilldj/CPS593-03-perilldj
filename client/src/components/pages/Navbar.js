import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dean Perillo - UI Programming Project</span>
          <button type="submit" className="btn btn-dark"><Link to="/">Login</Link></button>
          <button type="submit" className="btn btn-dark"><Link to="/register">Register</Link></button>
        </div>
      </nav>
    <Outlet />
    </div>
  );
}

export default Navbar;