import { useState } from "react";
import { ContainerHeader } from "./style";

function Header({ setFilteredProducts, products }) {
  const [seek, setSeek] = useState("");

  function search() {
    if (seek.trim().length > 0) {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(seek.toLowerCase()) ||
            product.category.toLowerCase().includes(seek.toLowerCase())
        )
      );
    }
  }

  function all() {
    setFilteredProducts(products);
  }

  return (
    <ContainerHeader>
      <div className="contentHeader">
        <figure className="contentHeader__containerLogo">
          <img
            onClick={all}
            src={require("../../assets/LogoKenzieBurguer.png")}
            alt="LogoKenzie"
          />
        </figure>

        <div className="containerPesquisa">
          <input
            type="text"
            placeholder="Digitar Pesquisar"
            value={seek}
            onChange={(ev) => setSeek(ev.target.value)}
          />
          <button
            onClick={() => {
              search();
              setSeek("");
            }}
          >
            Pesquisar
          </button>
        </div>
      </div>
    </ContainerHeader>
  );
}

export default Header;
