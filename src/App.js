import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/container/ItemListConteiner';

import './App.css';
import ItemDetailContainer from "./components/container/ItemDetailContainer";



function App() {
let greeting = "¡Bienvenidos!"
let subTit= "En Megumi podés confiar para elegir tu primer manga o seguir con las historias que tanto te gustan. ¡Este es un lugar creado por fanáticos para fanáticos!"
  
 return (
    <div className="App">
<BrowserRouter>
     <NavBar/> 
     <Routes>
       <Route path="/" element={<ItemListConteiner tituloProps= { greeting } subProps= { subTit } /> }/>
<Route path="/detalle" element={<ItemDetailContainer /> }/>
      </Routes>
      
</BrowserRouter>

    </div>
  );
}

export default App;
