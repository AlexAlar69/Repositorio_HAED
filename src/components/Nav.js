import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../estilos/Nav.css';
import TICS from '../imagenes/logo_TICeducativa_normal.png'
import Calidad from '../imagenes/CalidadyCompetividad.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Navv()
{
    
return (
    <>
    <Navbar bg="light" expand="lg" className=" navbar-fixed-top">
      <div class="container">
        <div class="col-sm-8 col-md-5">
        <img class="navbar-brand imagen" src={TICS} alt="TIC"/>
        <img class="navbar-brand imagen" src={Calidad} alt="logo"/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>  
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    
                    <Link id="links" to="/">Iniciar</Link>
                    <Link id="links" to="/Descubre">Descubre</Link>
                    <Link id="links" to="/Autoevaluacion">Autoevaluación</Link>
                    <Link id="links" to="/CanalYoutube">Canal Youtube</Link>                    
                    <Link id="links" to="/Contacto">Contacto</Link>

                </Nav>
            </Navbar.Collapse>  
      </div>
    </Navbar>
    </>
  );
}
export default Navv