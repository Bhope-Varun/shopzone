import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="success-page">
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with ShopKart India.
      </p>

      <p>
        Your order will be delivered within 2-4 business days.
      </p>

      <Link to="/" className="primary-btn">
        Continue Shopping
      </Link>
    </div>
  );
}