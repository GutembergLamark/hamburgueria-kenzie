import { useContext } from "react";
import { contextDashboard } from "../../context";
import Product from "../Product";
import { ListCard } from "./style";

const ProductList = () => {
  const { filteredProducts } = useContext(contextDashboard);

  return (
    <ListCard>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div className="noProduct">
          <h1 className="noProduct__description">
            Desculpe, não foram encontrados produtos para a sua busca... :(
          </h1>
          <img src={require("../../assets/empty-state.gif")} alt="" />
        </div>
      )}
    </ListCard>
  );
};

export default ProductList;
