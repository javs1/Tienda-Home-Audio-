import React from 'react';
import {Link} from 'react-router-dom';
import info from '../info';
import {Card,CardGroup,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function VistaDetalles(props){
    console.log(props.match.params.id);
    const articulo= info.productos.find(x=>x.id===props.match.params.id)
    return <Container className="justify-content-center" >
        <Link to="/" id="enlace" className="mb-2 text-muted"> &#x3C; Volver al inicio</Link>

        <CardGroup>
        <Card>
            <Card.Img variant="left" className="d-block w-100" src={articulo.imagen} />
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>{articulo.nombre}</Card.Title>
            <Card.Text>
                Precio: $<b>{articulo.precio}</b> 
                <div>Descripcion {articulo.descripcion}

                </div> 
                {articulo.reseña} Estrellas ({articulo.num_reseñas} Reseñas)
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            Cantidad: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
            </Card.Footer>
        </Card>
        </CardGroup>
        
        
        </Container>
}

export default VistaDetalles