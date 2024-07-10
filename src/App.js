import logo from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [charaters, setcharaters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    console.log(characterApi.results);
    setcharaters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty </h1>
        {charaters ? (
          <Characters charaters={charaters} />
        ) : (
          <>
            <img src={logo} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes{" "}
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
