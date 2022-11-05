import { useContext } from "react";
import { contextDashboard } from "../../context";
import { ContainerHeader } from "./style";

const Header = () => {
  const { seek, setSeek, search, all } = useContext(contextDashboard);

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
};

export default Header;
