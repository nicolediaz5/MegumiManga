import ItemList from '../ItemList';
import '../style.css'

function ItemListConteiner(props) {

    const {tituloProps, subProps} = props
  return (
    <div className="saludo">
<h1 className='tituloPag'> {tituloProps} </h1>
<h6 className='subPag'> {subProps} </h6>
<hr></hr>
<h1 className='tituloProd'>M A N G A S</h1>
<hr></hr>
<ItemList />

    </div>
    
  );

}

export default  ItemListConteiner