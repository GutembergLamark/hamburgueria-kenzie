import { toast } from "react-toastify";
import { Card, ProductInfo } from "./style";

function Products({ product, handleClick, currentSale }) {
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
        <button
          className="productAddCart"
          onClick={() => {
            if (!currentSale.includes(product)) {
              handleClick(product.id);
            } else {
              toast.error("Item já adicionado ao carrinho de compras");
            }
          }}
        >
          Adicionar
        </button>
      </ProductInfo>
    </Card>
  );
}

export default Products;
