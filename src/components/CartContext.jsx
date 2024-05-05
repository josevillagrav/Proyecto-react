import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([
    { name: "Hogwarts Legacy PS5", precio: 50000, stock: 10 },
    { name: "Play Station 5", precio: 600000, stock: 10 },
    { name: "Harry Potter Q Posket", precio: 25000, stock: 10 },
  ]);

  const clear = () => setItems([]);

  const removeItem = (id) => {
    const filetered = items.filter((item) => item.id !== id);
    setItems(filetered);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <CartContext.Provider value={{ addItem, clear, items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
