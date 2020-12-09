import React from 'react';
import {Link} from 'react-router-dom';
import info from '../info'
import {Card,CardDeck} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function VistaPrincipal(props){
    return <CardDeck id="tarjeta_articulo" className="justify-content-center">
    {
        info.productos.map(articulo =>
            <Card  id="carta_articulo" fluid>
            <Card.Img variant="top" src={articulo.imagen} />
            <Card.Body>
            <Card.Title><Link to={'/articulo/'+articulo.id}></Link></Card.Title>
            <Card.Text>
                <Link to={'/articulo/'+articulo.id}>{articulo.nombre}</Link>
            </Card.Text>
            <div class="marca_articulo">{articulo.marca}</div>
            <div class="precio_articulo">${articulo.precio}</div>
            <div class="reseña_articulo">{articulo.reseña} estrellas ({articulo.num_reseñas})</div>
            </Card.Body>
            </Card>   
        )
    }  
    </CardDeck>
}

export default VistaPrincipal