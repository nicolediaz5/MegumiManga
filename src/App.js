
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

     <NavBar/> 

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
