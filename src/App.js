import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./page/Home";
import Liste from "./page/Liste";
import Detail from "./page/Detail";
import TypeFeu from "./page/TypeFire";
import TypePoison from "./page/TypePoison";
import TypeWater from "./page/TypeWater";
import PokemonPage from "./page/PokemonPage";
import PokemonTypePage from "./page/PokemonPageType";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/typeFire" element={<TypeFeu />} />
        <Route path="/typePoison" element={<TypePoison />} />
        <Route path="/typeWater" element={<TypeWater />} />
        <Route path="/pokemon/:id" element = {<PokemonPage />} />
        <Route path="/pokemon/" element = {<PokemonTypePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
