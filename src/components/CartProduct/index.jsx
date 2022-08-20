import { ItemCart } from "./style";

function CartProduct({ product, removeItem }) {
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
      <button
        id={product.index}
        className="buttonRemove"
        onClick={() => removeItem(product)}
      >
        Remover
      </button>
    </ItemCart>
  );
}

export default CartProduct;
