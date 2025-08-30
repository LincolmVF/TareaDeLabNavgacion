import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export function useCart() {
  return useContext(CartContext);
}


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const resetCart = () => setCart([]);

  const value = { cart, addToCart, resetCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
