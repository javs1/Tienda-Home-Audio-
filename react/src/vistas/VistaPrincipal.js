import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import info from '../info'
import {Card,CardDeck} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function VistaPrincipal(props){

    const [productos,setArticulo] = useState([]);
    
    useEffect(()=>{
        effect
        return()=>{

        };

    },[])

    return <CardDeck id="tarjeta_articulo" className="justify-content-center">
    {
        info.productos.map(articulo =>
            <Card  id="carta_articulo" fluid>
            <Card.Img variant="top" src={articulo.imagen} />
            <Card.Body>
            <Card.Title><Link to={'/articulo/'+articulo.id}>{articulo.nombre}</Link></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{articulo.marca}</Card.Subtitle>
            <Card.Text> 
            <div class="precio_articulo">${articulo.precio}</div>
            <div class="reseña_articulo">{articulo.reseña} estrellas ({articulo.num_reseñas})</div>
            </Card.Text>
            </Card.Body>
            </Card>   
        )
    }  
    </CardDeck>
}

export default VistaPrincipal