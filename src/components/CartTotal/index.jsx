import { useContext } from "react";
import { useEffect } from "react";
import { contextDashboard } from "../../context";
import { ContainerTotal } from "./style";

const CartTotal = () => {
  const { currentSale, setCurrentSale, cartTotal, setCartTotal } =
    useContext(contextDashboard);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    );
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
};

export default CartTotal;
