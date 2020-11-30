import React from 'react';
import info from './info';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import './App.css';
import VistaPrincipal from './vistas/VistaPrincipal'
import VistaDetalles from './vistas/VistaDetalles'

function App() {

    const abrirMenu=()=>{
        document.querySelector(".menu_lateral").classList.add("open");
    }

    const cerrarMenu=()=>{
        document.querySelector(".menu_lateral").classList.remove("open");
    }


  return (
   <BrowserRouter>
    <div class="contenedor_primario">
            <header class="header">
                <div class="marca">
                    <button class="lateral" onClick={abrirMenu}>&#9776;</button>
                    <Link to="/">Home Audio</Link> 
                </div>
                <div class="header_links">
                    <a href="cart.html">Carrito</a>
                    <a href="sesion.html">Iniciar sesion</a>
                </div>
            </header>
            <aside class="menu_lateral">
                <button class="cerrar_menu_lateral" onClick={cerrarMenu}>X</button>
                <h3>Categorias</h3>
                <ul>Repuestos y reparaciones
                    <li>
                        <a href="index.html">Faros</a>
                    </li>
                    <li>
                        <a href="index.html">Llantas</a>
                    </li>
                    <li>
                        <a href="index.html">Rines</a>
                    </li>
                    <li>
                        <a href="index.html">Amortiguadores</a>
                    </li>
                </ul>
                <ul>Sonido
                    <li>
                        <a href="index.html">Radios</a>
                    </li>
                    <li>
                        <a href="index.html">Altavoces</a>
                    </li>
                    <li>
                        <a href="index.html">Pantallas</a>
                    </li>
                    <li>
                        <a href="index.html">Planta</a>
                    </li>
                </ul>
            </aside>
            <main class="main">
                <div class="contenido">
                    <Route path="/" exact={true} component={VistaPrincipal}/>
                    <Route path="/articulo/:id" component={VistaDetalles}/>

                </div>
            </main> 
            <footer class="footer">Derechos reservados</footer>         
    </div>
    </BrowserRouter>
  );
}

export default App;
