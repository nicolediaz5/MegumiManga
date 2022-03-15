
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/container/ItemListConteiner';

import './App.css';



function App() {
let greeting = "¡Bienvenidos!"
let subTit= "En Megumi podés confiar para elegir tu primer manga o seguir con las historias que tanto te gustan. ¡Este es un lugar creado por fanáticos para fanáticos!"
  
 return (
    <div className="App">

     <NavBar/> 
<ItemListConteiner tituloProps= { greeting } subProps= { subTit } />
      


    </div>
  );
}

export default App;
