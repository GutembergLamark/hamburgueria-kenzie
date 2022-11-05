import { useContext } from "react";
import { contextDashboard } from "../../context";
import { Card, ProductInfo } from "./style";

const Product = ({ product }) => {
  const { addCart } = useContext(contextDashboard);

  return (
    <Card>
      <figure className="containerImage">
        <img
          className="containerImage__img"
          src={product.img}
          alt={product.name}
        />
      </figure>
      <ProductInfo>
        <h2 className="productName">{product.name}</h2>
        <p className="productCategory">{product.category}</p>
        <span className="productPrice">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
        <button className="productAddCart" onClick={() => addCart(product)}>
          Adicionar
        </button>
      </ProductInfo>
    </Card>
  );
};

export default Product;
