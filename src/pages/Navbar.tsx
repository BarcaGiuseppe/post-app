import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
      {isAuthenticated && (
        <div>
          <div>
            <NavLink to="/">Post</NavLink>
          </div>{" "}
          <div>
            <NavLink to="/login" onClick={logout}>
              Logout
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
