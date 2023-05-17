import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../estilos/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function Year(){
  let year
  return  year = new Date().getFullYear();
}
function Month(){
  let month
  return month = new Date().getMonth()+1;
 
}
function Day(){
  let day
  return day = new Date().getDate();
}
function Header() {
  return (         
  <>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-2" id="date">
          <FontAwesomeIcon icon={faClock} id="reloj"/>{Day()}/{Month()}/{Year()}
          </div>
          <div class="col-sm-7 col-md-9" id="Title">
          <p>Herramienta de Autoevaluacion HAED</p>
          </div>
          <div class="col-sm-2 col-md-1">
            <Dropdown >
              <Dropdown.Toggle id="dropdown-basic" >
                <FontAwesomeIcon icon={faCircleUser} />
              </Dropdown.Toggle>
              <Dropdown.Menu>                
                <Dropdown.ItemText><Link id="links-header" to="/Iniciar-sesion">Iniciar Sesión</Link></Dropdown.ItemText>
                <Dropdown.ItemText><Link id="links-header" to="/Registrarse">Registrarse</Link>    </Dropdown.ItemText>
                
                                                                           
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      
      </div>
    </header>
  </>                               
  )
}
export default Header  