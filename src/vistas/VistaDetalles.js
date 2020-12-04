import React from 'react';
import {Link} from 'react-router-dom';
import info from '../info';

function VistaDetalles(props){
    console.log(props.match.params.id);
    const articulo= info.productos.find(x=>x.id===props.match.params.id)
    return <div>
        <div class="regreso">
        <Link to="/"> &#x3C; Volver al inicio</Link>
        </div>
        <div class="detalles">
            <div class="detalles_imagen">
                <img src={articulo.imagen} alt="articulo"></img>
            </div>
        </div>
        <div class="detalles_caracteristicas">
                <ul>
                    <li>
                        <h4>{articulo.nombre}</h4>  
                    </li>  
                    <li>
                        {articulo.reseña} Estrellas ({articulo.num_reseñas} Reseñas) 
                    </li> 
                    <li>
                        Precio: $<b>{articulo.precio}</b> 
                    </li> 
                    <li> Descripcion
                        <div>{articulo.descripcion}</div> 
                    </li> 
                </ul>
        </div>
        <div class="detalles_carrito">
            <ul>
                <li>
                    Precio {articulo.precio}
                </li>
                <li>
                    Status {articulo.status}
                </li>
                <li>
                    Cantidad: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </li>
                <li>
                    <button>Añadir al carro</button>
                </li>
            </ul>
         </div>
        
        
    </div>
}

export default VistaDetalles