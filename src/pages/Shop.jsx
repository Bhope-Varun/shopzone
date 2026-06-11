import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All"
        ? true
        : product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Products</h1>

        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              category === cat
                ? "filter-btn active-filter"
                : "filter-btn"
            }
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="results-count">
        {filteredProducts.length} Products Found
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />

            <div className="product-info">
              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.title}</h3>

              <p className="price">
                ₹
                {(
                  product.price * 85
                ).toLocaleString("en-IN")}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="view-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}