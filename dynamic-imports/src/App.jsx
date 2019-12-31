import React, {useState} from 'react';
import data from './data.json';
import Loader from './Loader.jsx';
import logo from './images/platzi.png';
import video from './video/que-es-core.mp4';

import './less/less.less';
import './sass/sass.scss';
import './stylus/stylus.styl'


function App(props) {
    const [dataItems, setDataItems] = useState([]);

    async function handleClick() {
        setDataItems(data.loaders);
        const {alerta} = await import('./alert.js')
        alerta('importación dinamica')
    }

    return(
        <div>
            <p className="sass">
                esto es sass
            </p>
            <p className="less">
                esto es sass
            </p>
            <p className="stylus">
                esto es sass
            </p>
            <p className="post-css">
                esto es postcss
            </p>
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