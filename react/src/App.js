import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import VistaPrincipal from './vistas/VistaPrincipal'
import VistaDetalles from './vistas/VistaDetalles'
import {Navbar, NavDropdown,Nav,Image,Carousel,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
      
   <BrowserRouter>

    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
   
          
            
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
              <Navbar.Brand href="/"><Image width={150} height={100} className="mr-3" src="/imagenes/icono.jpg" fluid /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Refacciones" id="basic-nav-dropdown">
                    <NavDropdown.Item >Faros</NavDropdown.Item>
                    <NavDropdown.Item >Calaveras</NavDropdown.Item>
                    <NavDropdown.Item >Llantas</NavDropdown.Item>
                    <NavDropdown.Item >Amortiguadores</NavDropdown.Item>
                    <NavDropdown.Item >Espejos laterales</NavDropdown.Item>
                   
                  </NavDropdown>
                  <NavDropdown title="Sonido" id="basic-nav-dropdown">
                    <NavDropdown.Item >Estereos</NavDropdown.Item>
                    <NavDropdown.Item >Altavoces</NavDropdown.Item>
                    <NavDropdown.Item >Pantallas</NavDropdown.Item>
                    <NavDropdown.Item >Plantas</NavDropdown.Item>
                   
                  </NavDropdown>
                  
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
          
            
            
            <body>
            <Container className="justify-content-center">
            <Carousel>
              <Carousel.Item>
                <img 
                  height={400}
                  className="d-block w-100"
                  src="/imagenes/portada.jpg"
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img 
                  height={400}
                  className="d-block w-100"
                  src="/imagenes/carrusel/mod_sonido.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>¡Sistemas de audio totalmente personalizados!</h3>
                  <p>Entra a nuestra pagina de facebook o instagram para ver nuestros trabajos</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  height={400}
                  className="d-block w-100"
                  src="/imagenes/carrusel/productos.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Productos de calidad</h3>
                  <p>Revisa nuestro catalogo de equipo de sonido</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  height={400}
                  className="d-block w-100"
                  src="/imagenes/carrusel/reparacion.jpg"
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h3>¿Problemas con tu coche?</h3>
                  <p>Tambien hacemos reaparaciones e instalamos refacciones</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Container>
            
            <Route path="/" exact={true} component={VistaPrincipal}/>
            <Route path="/articulo/:id" component={VistaDetalles}/>
            </body>
            
            
         
            
            
              <Navbar  bg="dark" variant="dark" expand="lg" className="justify-content-center"  >
                <Nav.Item id="footer">
                  Todos los derechos reservados
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://www.instagram.com/home__audio">
                  <i className="fa fa-instagram" id="footer"></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://www.facebook.com/HOME-AUDIO-289083307917016">
                    <i className="fa fa-facebook-square" id="footer"></i>
                  </Nav.Link>
                </Nav.Item>
              </Navbar>
            
          
    </BrowserRouter>
  );
}

export default App;
