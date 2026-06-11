import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleLogin = () => {
    login();

    localStorage.setItem(
      "userName",
      name.trim() || "Guest"
    );

    navigate("/checkout");
  };

  return (
    <section className="login-page">
      <div className="login-card">

        <div className="login-icon">
          🛒
        </div>

        <h1>Welcome Back</h1>

        <p>
          Continue shopping with your
          ShopKart India account.
        </p>

        <div className="form-group">
          <label>Your Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="login-input"
          />
        </div>

        <button
          className="primary-btn login-btn"
          onClick={handleLogin}
        >
          Continue as Guest
        </button>

        <small className="login-note">
          No registration required.
        </small>

      </div>
    </section>
  );
}