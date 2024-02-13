import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Post</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
