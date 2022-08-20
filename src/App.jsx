import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";

import api from "./Services/api";

import "./App.css";
import GlobalStyle from "./reset";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  function handleClick(productId) {
    setCurrentSale([
      products.find((product) => product.id === productId),
      ...currentSale,
    ]);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <main className="contentMain">
        <section className="containerMain__vitrine">
          <ProductList
            handleClick={handleClick}
            filteredProducts={filteredProducts}
            currentSale={currentSale}
          />
        </section>

        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          setCurrentSale={setCurrentSale}
        />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
