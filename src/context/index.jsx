import { createContext, useEffect, useState } from "react";
import api from "../Services/api";

export const contextDashboard = createContext({});

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [seek, setSeek] = useState("");

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  function incrementItem(product) {
    setCurrentSale(
      currentSale.map((item) =>
        item.id === product.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decrementItem(product) {
    if (product.quantity === 1) {
      removeToCart(product);
    } else {
      setCurrentSale(
        currentSale.map((item) =>
          item.id === product.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function addCart(productAdded) {
    const productAlreadyExists = currentSale.find(
      (product) => product.id === productAdded.id
    );

    if (productAlreadyExists) {
      const productsCart = currentSale.map((product) =>
        product.id === productAdded.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      setCurrentSale(productsCart);
    } else {
      const product = products.find(
        (product) => product.id === productAdded.id
      );

      setCurrentSale([{ ...product, quantity: 1 }, ...currentSale]);
    }
  }

  function removeToCart(productDeleted) {
    const products = currentSale.filter(
      (product) => product.id !== productDeleted.id
    );

    setCurrentSale(products);
  }

  function search() {
    if (seek.trim().length > 0) {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(seek.toLowerCase()) ||
            product.category.toLowerCase().includes(seek.toLowerCase())
        )
      );
    }
  }

  function all() {
    setFilteredProducts(products);
  }

  return (
    <contextDashboard.Provider
      value={{
        incrementItem,
        decrementItem,
        addCart,
        removeToCart,
        search,
        all,
        currentSale,
        setCurrentSale,
        cartTotal,
        setCartTotal,
        filteredProducts,
        seek,
        setSeek,
      }}
    >
      {children}
    </contextDashboard.Provider>
  );
};

export default Provider;
