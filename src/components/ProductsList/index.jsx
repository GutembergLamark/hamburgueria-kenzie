import Products from "../Product";
import { ListCard } from "./style";

function ProductList({ handleClick, filteredProducts, currentSale }) {
  return (
    <ListCard>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleClick={handleClick}
            currentSale={currentSale}
          />
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
}

export default ProductList;
