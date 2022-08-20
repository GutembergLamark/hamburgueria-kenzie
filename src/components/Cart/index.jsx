import CartTotal from "../CartTotal";
import { SectionCart } from "./style";
import CartProduct from "../CartProduct";

function Cart({ currentSale, cartTotal, setCartTotal, setCurrentSale }) {
  function removeItem(productDeleted) {
    const product = currentSale.findIndex(
      (product) => product.id === productDeleted.id
    );

    currentSale.splice(product, 1);

    setCurrentSale([...currentSale]);
  }

  return (
    <SectionCart currentSale={currentSale}>
      <header className="headerCart">
        <h2>Carrinho de compras</h2>
      </header>
      <div className="listItens">
        {currentSale.length === 0 ? (
          <>
            <h3>Sua sacola está vazia</h3>
            <img
              className="emptyCart__img"
              src={require("../../assets/astronaut-light-theme.gif")}
              alt=""
            />
          </>
        ) : (
          <ul className="listItens__cart">
            {currentSale.map((product, index) => {
              return (
                <CartProduct
                  key={index}
                  product={product}
                  removeItem={removeItem}
                />
              );
            })}
          </ul>
        )}
      </div>
      <CartTotal
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        setCurrentSale={setCurrentSale}
      />
    </SectionCart>
  );
}

export default Cart;
