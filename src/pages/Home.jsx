import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            🔥 Mega Sale 2026
          </span>

          <h1>
            India's Smartest
            <br />
            Shopping Destination
          </h1>

          <p>
            Discover premium electronics,
            gadgets and accessories at
            unbeatable prices with fast
            delivery across India.
          </p>

          <div className="hero-buttons">
            <Link
              to="/shop"
              className="primary-btn"
            >
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >
              Contact Us
            </Link>
          </div>

          <div className="trust-badge">
            ⭐ Trusted by thousands of happy
            shoppers
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
            alt="Shopping"
          />
        </div>
      </section>

      {/* FLASH SALE */}
<section className="flash-sale">
  <span className="flash-tag">
    ⚡ FLASH SALE
  </span>

  <h2>Up To 40% OFF</h2>

  <p>
    Limited time discounts on gaming,
    accessories and audio products.
  </p>

  <Link
    to="/shop"
    className="offer-btn"
  >
    Grab Deals →
  </Link>
</section>

      {/* LATEST LAUNCHES */}

      <section className="latest-launches">
        <h2>🔥 Latest Launches</h2>

        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <span className="launch-badge">
                NEW
              </span>

              <h3>Samsung Galaxy S25</h3>

              <p className="price">
                ₹84,999
              </p>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <span className="launch-badge">
                NEW
              </span>

              <h3>MacBook Air M4</h3>

              <p className="price">
                ₹1,14,999
              </p>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <span className="launch-badge">
                NEW
              </span>

              <h3>Apple Watch</h3>

              <p className="price">
                ₹39,999
              </p>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <span className="launch-badge">
                NEW
              </span>

              <h3>Apple Vision Pro</h3>

              <p className="price">
                ₹3,49,999
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="category-card">
            <h3>📱 Smartphones</h3>
            <p>Latest flagship devices</p>
          </div>

          <div className="category-card">
            <h3>⌚ Smart Watches</h3>
            <p>Fitness & lifestyle</p>
          </div>

          <div className="category-card">
            <h3>🎧 Headphones</h3>
            <p>Premium sound quality</p>
          </div>

          <div className="category-card">
            <h3>💻 Laptops</h3>
            <p>Performance machines</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section className="featured-products">
        <h2>🏆 Best Sellers</h2>

        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <h3>iPhone 15 Pro</h3>
              <p className="price">
                ₹79,999
              </p>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <h3>Apple Watch</h3>
              <p className="price">
                ₹39,999
              </p>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <h3>AirPods Pro</h3>
              <p className="price">
                ₹24,999
              </p>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800"
              alt=""
              className="product-image"
            />

            <div className="product-info">
              <h3>PlayStation 5</h3>
              <p className="price">
                ₹54,999
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}

      <section className="reviews-section">
        <h2>⭐ Customer Reviews</h2>

        <div className="features">
          <div className="feature-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Amazing products and fast
              delivery.
            </p>
            <strong>Rahul Sharma</strong>
          </div>

          <div className="feature-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Best online shopping experience.
            </p>
            <strong>Priya Patel</strong>
          </div>

          <div className="feature-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Excellent quality and support.
            </p>
            <strong>Arjun Kumar</strong>
          </div>
        </div>
      </section>

      {/* OFFER BANNER */}

      <section className="offer-banner">
        <div className="offer-content">
          <span className="offer-tag">
            🔥 LIMITED TIME OFFER
          </span>

          <h2>Summer Sale 2026</h2>

          <p>
            Save up to 50% on smartphones,
            headphones, laptops and
            accessories.
          </p>
        </div>

        <Link
          to="/shop"
          className="offer-btn"
        >
          Shop Deals →
        </Link>
      </section>

      {/* FEATURES */}

      <section className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>
            Quick delivery across India.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure Payments</h3>
          <p>
            100% secure checkout process.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎁 Best Deals</h3>
          <p>
            Exclusive discounts every day.
          </p>
        </div>
      </section>
    </>
  );
}