import { useContext } from "react";
import { contextDashboard } from "../../context";
import { ItemCart } from "./style";

const CartProduct = ({ product }) => {
  const { removeToCart, incrementItem, decrementItem } =
    useContext(contextDashboard);

  return (
    <ItemCart>
      <div className="containerImgInfo">
        <figure className="containerImageCart">
          <img
            className="containerImageCart__img"
            src={product.img}
            alt={product.name}
          />
        </figure>
        <div className="containerInfo">
          <h3 className="containerInfo__name">{product.name}</h3>
          <p className="containerInfo__category">{product.category}</p>
        </div>
      </div>
      <div className="itemController">
        <button
          id={product.index}
          className="buttonRemove"
          onClick={() => removeToCart(product)}
        >
          Remover
        </button>
        <div className="itemController__counter">
          <button
            className="counter--max"
            onClick={() => incrementItem(product)}
          >
            <span>+</span>
          </button>
          <span className="counter--value">{product.quantity}</span>
          <button
            className="counter--min"
            onClick={() => decrementItem(product)}
          >
            <span>-</span>
          </button>
        </div>
      </div>
    </ItemCart>
  );
};

export default CartProduct;
