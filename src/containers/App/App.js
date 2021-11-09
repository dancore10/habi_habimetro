// import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="section">
      <header className="App-header">
        <div className="pattern"></div>
        <div className="contenedor">
          <h1 className="h1 blanco">¿Quieres vender tu casa o apartamento?</h1>
          <Link to="/sell/user-infomation">
            <button className="button">VENDER AHORA</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
