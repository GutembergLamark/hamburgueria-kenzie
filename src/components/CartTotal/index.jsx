import { useEffect } from "react";
import { ContainerTotal } from "./style";

function CartTotal({ currentSale, cartTotal, setCartTotal, setCurrentSale }) {
  useEffect(() => {
    setCartTotal(currentSale.reduce((acc, cur) => acc + cur.price, 0));
  }, [currentSale, setCartTotal]);

  return (
    <ContainerTotal currentSale={currentSale}>
      <div className="containerTotalValor">
        <p>Total</p>
        <span>{cartTotal.toFixed(2).replace(".", ",")}</span>
      </div>
      <button className="buttonRemoveItens" onClick={() => setCurrentSale([])}>
        Remover todos
      </button>
    </ContainerTotal>
  );
}

export default CartTotal;
