import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../estilos/Login.css";
import "../estilos/Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";



function Sign(){
    const [ojos,setOjos]=useState(faEye)
    const SeePassword=()=>{
        let pass = document.getElementById("myPassword");
        if(pass.type==="password"){
            pass.type="text";
            setOjos(faEyeSlash);        
        }
        else if(pass.type==="text"){
            pass.type="password";
            setOjos(faEye);
        }
        
    }
    return(        
        <>
        <div class="bar">
            <div class="container">
                <h1>Registrarse</h1>
            </div>
        </div>
        <div class="container" id="log_sign">
            <div class="row">
                <div class="col-sm-12 col-md-6 sign">
                    <h2>¿Ya tienes una cuenta?</h2>
                    <p>Para contestar la autoevaluación debes iniciar sesión, si ya tienes una cuenta da click en el botón Iniciar Sesión</p>
                    <button>INICIAR SESIÓN</button>
                </div>
                <div class="col-sm-12 col-md-6 login">
                    <h2>Bienvenido</h2>
                    <h3>Vamos a crear una nueva cuenta</h3>
                    <form>
                        <input type={"text"} placeholder="Ingrese su matricula" required></input>
                        <input type={"text"} placeholder="Coloque aquí su nombre" required></input>
                        <input type={"text"} placeholder="Coloque aquí sus apellidos" required></input>
                        <input  type={"mail"} placeholder="Ingrese su Correo Electrónico" required></input>
                        <input type={"text"} placeholder="Número de teléfono" required></input>
                        <button id="ingresar">CLICK AQUÍ PARA CREAR SU CUENTA</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sign;