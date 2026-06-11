import {
  CheckCircle,
  CreditCard,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const { totalPrice, clearCart } = useCart();

  const handleOrder = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        <div className="checkout-form">
          <h1>Checkout</h1>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              rows="4"
              placeholder="Enter delivery address"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Payment Method</label>

            <select>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
              <option>Cash On Delivery</option>
            </select>
          </div>

          <button
            className="place-order-btn"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          <div className="summary-item">
            <Truck size={18} />
            <span>Free Delivery</span>
          </div>

          <div className="summary-item">
            <CreditCard size={18} />
            <span>Secure Payment</span>
          </div>

          <div className="summary-item">
            <CheckCircle size={18} />
            <span>
              100% Purchase Protection
            </span>
          </div>

          <hr />

          <div className="checkout-total">
            <span>Total Amount</span>

            <strong>
              ₹{totalPrice.toLocaleString("en-IN")}
            </strong>
          </div>

          <p className="checkout-note">
            Your order will be delivered within
            2-4 business days.
          </p>
        </div>

      </div>
    </div>
  );
}