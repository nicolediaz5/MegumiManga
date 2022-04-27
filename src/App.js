import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/container/ItemListConteiner';

import './App.css';
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";





function App() {
let greeting = "¡Bienvenidos!"
let subTit= "En Megumi podés confiar para elegir tu primer manga o seguir con las historias que tanto te gustan. ¡Este es un lugar creado por fanáticos para fanáticos!"
  
 return (
    <div className="App">
<BrowserRouter>

<CartContextProvider>

     <NavBar/>
     
     <Routes>
     <Route path="/" element={<ItemListConteiner tituloProps= { greeting } subProps= { subTit } /> }/>
       <Route path="/categoria/:categoriaId" element={<ItemListConteiner tituloProps= { greeting } subProps= { subTit } /> }/>
<Route path="/detalle/:detalleId" element={<ItemDetailContainer /> }/>

<Route path="/cart" element={ <Cart />}/>

      </Routes>

</CartContextProvider>

</BrowserRouter>

    </div>
  );
}

export default App;
