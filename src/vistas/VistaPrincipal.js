import React from 'react';
import {Link} from 'react-router-dom';
import info from '../info'

function VistaPrincipal(props){
    return <ul class="productos">
    {
        info.productos.map(articulo =>
    <li>
        
        <div class="articulo">
            <Link to={'/articulo/'+articulo.id}>
            <img class="imagen_articulo" src={articulo.imagen} alt=""></img>
            <div class="nombre_articulo">
                <Link to={'/articulo/'+articulo.id}>{articulo.nombre}</Link>
            </div>
            </Link>
            <div class="marca_articulo">{articulo.marca}</div>
            <div class="precio_articulo">${articulo.precio}</div>
            <div class="reseña_articulo">{articulo.reseña} estrellas ({articulo.num_reseñas})</div>
            
        </div>
        
    </li>
        )
    }  
</ul>
}

export default VistaPrincipal