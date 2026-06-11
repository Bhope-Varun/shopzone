import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart Is Empty 🛒</h1>

        <p>
          Looks like you haven't added any products yet.
        </p>

        <Link
          to="/shop"
          className="primary-btn"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-card"
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{item.name}</h3>

                <p className="item-price">
                  ₹
                  {item.price.toLocaleString(
                    "en-IN"
                  )}
                </p>
              </div>

              <div className="quantity">
                <button
                  disabled={item.quantity <= 1}
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  <Minus size={16} />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="item-total">
                ₹
                {(
                  item.price *
                  item.quantity
                ).toLocaleString("en-IN")}
              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <strong>
              {cartItems.length}
            </strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <strong>Free</strong>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <strong className="discount-text">
              -₹500
            </strong>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>

            <strong>
              ₹
              {Math.max(
                totalPrice - 500,
                0
              ).toLocaleString("en-IN")}
            </strong>
          </div>

          <Link
            to="/checkout"
            className="primary-btn"
          >
            Proceed To Checkout
          </Link>

          <button
            className="secondary-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}