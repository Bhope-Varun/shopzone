import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading Product...</h2>;
  }

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  };

  return (
    <section className="product-detail">
      <div className="product-detail-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="product-detail-info">
        <span className="product-badge">
          🔥 Best Seller
        </span>

        <h1>{product.title}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐
          <span>
            {" "}
            ({product.rating} Rating)
          </span>
        </div>

        <div className="price-section">
          <span className="old-price">
            ₹
            {Math.round(
              product.price * 85 * 1.15
            ).toLocaleString("en-IN")}
          </span>

          <span className="detail-price">
            ₹
            {(product.price * 85).toLocaleString(
              "en-IN"
            )}
          </span>

          <span className="discount">
            15% OFF
          </span>
        </div>

        <p className="detail-description">
          {product.description}
        </p>

        <div className="delivery-box">
          🚚 Free Delivery by Tomorrow
        </div>

        <ul className="feature-list">
          <li>✓ Fast Delivery</li>
          <li>✓ 1 Year Warranty</li>
          <li>✓ Secure Payment</li>
          <li>✓ Easy Returns</li>
        </ul>

        <div className="action-buttons">
          <button
            className="add-cart-btn"
            onClick={() =>
              addToCart(cartProduct)
            }
          >
            Add To Cart
          </button>

          <button className="buy-now-btn">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}