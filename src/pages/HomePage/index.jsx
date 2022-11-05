import { useContext } from "react";

import Cart from "../../components/Cart";
import Header from "../../components/Header";
import ProductList from "../../components/ProductsList";

import { contextDashboard } from "../../context";

import { Main } from "./style";

const HomePage = () => {
  const { setFilteredProducts, products } = useContext(contextDashboard);

  return (
    <>
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <Main className="contentMain">
        <section className="containerMain__vitrine">
          <ProductList />
        </section>

        <Cart />
      </Main>
    </>
  );
};

export default HomePage;
