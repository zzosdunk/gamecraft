import React, { createContext, useContext, useState } from "react";
import { IProduct } from "../models";
interface IShoppingCartContext {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (product: IProduct) => number;
  increaseCartQuantity: (product: IProduct) => void;
  decreaseCartQuantity: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  cleanCart: () => void;
  cartQuantity: number;
  cartItems: IProduct[];
  isCartOpen: boolean;
  totalAmount: number;
}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const getItemQuantity = (product: IProduct) => {
    return cartItems.find((item) => item.id === product.id)?.quantity || 0;
  };

  const increaseCartQuantity = (product: IProduct) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === product.id) == null) {
        setTotalAmount((prev) => {
          if (product.price === undefined) product.price = 0;
          return prev + product.price;
        });
        setCartQuantity((prev) => prev + 1);
        return [...currentItems, { ...product, quantity: 1 }];
      } else {
        setTotalAmount((prev) => {
          if (product.price === undefined) product.price = 0;
          return prev + product.price;
        });
        setCartQuantity((prev) => prev + 1);
        return currentItems.map((item) => {
          if (item.id === product.id) {
            if (item.quantity === undefined) item.quantity = 0;
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (product: IProduct) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === product.id)?.quantity === 1) {
        setTotalAmount((prev) => {
          if (product.price === undefined) product.price = 0;
          return prev - product.price;
        });
        setCartQuantity((prev) => prev - 1);
        return currentItems.filter((item) => item.id !== product.id);
      } else {
        setTotalAmount((prev) => {
          if (product.price === undefined) product.price = 0;
          return prev - product.price;
        });
        setCartQuantity((prev) => prev - 1);
        return currentItems.map((item) => {
          if (item.id === product.id) {
            if (item.quantity === undefined) item.quantity = 0;
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (product: IProduct) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== product.id);
    });
  };

  const cleanCart = () => {
    setCartItems((currentItems) => {
      return currentItems.splice(0, currentItems.length - 1);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cleanCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        isCartOpen,
        totalAmount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
