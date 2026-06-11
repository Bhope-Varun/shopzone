import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        { ...product, quantity: 1 },
      ];
    });
  };

  const updateQuantity = (
    id,
    quantity
  ) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (sum, item) =>
        sum +
        item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}