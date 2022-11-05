import HomePage from "./pages/HomePage";

import GlobalStyle from "./reset";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
      <ToastContainer />
    </div>
  );
}

export default App;
