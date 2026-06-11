import { ShoppingCart, User, LogOut } from "lucide-react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cartCount } = useCart();

  const {
    isAuthenticated,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const userName =
    localStorage.getItem("userName") || "Guest";

  const handleLogout = () => {
    logout();
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        🛒 ShopKart India
      </Link>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="nav-actions">

        {isAuthenticated ? (
          <>
            <span className="user-name">
              👋 {userName}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="icon-btn">
            <User size={22} />
          </Link>
        )}

        <Link to="/cart" className="cart-btn">
          <ShoppingCart size={22} />

          {cartCount > 0 && (
            <span className="badge">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}