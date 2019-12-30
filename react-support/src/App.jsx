import React, {useState} from 'react';
import data from './data.json';
import Loader from './Loader.jsx';


function App(props) {
    const [dataItems, setDataItems] = useState([]);

    function handleClick() {
        setDataItems(data.loaders)
    }

    return(
        <div>
            Aplicación hecha con react en webpack!!
            <ul>
                {dataItems.map( item => <Loader {...item}  key={item.id}/>)}
            </ul>

            <button onClick={handleClick}>Listar los elementos</button>
        </div>
    )
}

export default App;