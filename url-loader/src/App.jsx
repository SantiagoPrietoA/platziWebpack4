import React, {useState} from 'react';
import data from './data.json';
import Loader from './Loader.jsx';
import logo from './images/platzi.png';
import video from './video/que-es-core.mp4';


function App(props) {
    const [dataItems, setDataItems] = useState([]);

    function handleClick() {
        setDataItems(data.loaders)
    }

    return(
        <div>
            Aplicación hecha con react en webpack!!
            <video src={video} controls poster={logo} width={360}></video>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
            <ul>
                {dataItems.map( item => <Loader {...item}  key={item.id}/>)}
            </ul>

            <button onClick={handleClick}>Listar los elementos</button>
        </div>
    )
}

export default App;