import React from 'react';
import info from '../info'

function VistaPrincipal(props){
    return <ul class="productos">
    {
        info.productos.map(articulo =>
    <li>
        <div class="articulo">
            <img class="imagen_articulo" src={articulo.imagen} alt=""></img>
            <div class="nombre_articulo">
                <a href="articulo.html">{articulo.nombre}</a>
            </div>
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