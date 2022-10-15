import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cubeImg from '../images/Cubito.png';
import graphImgs from '../images/imagenSeccion2Reservas.png'

const Reservas = () => {

    const navigate = useLocation()

    const paths = {
        home: navigate.pathname === '/login'
    };
    
    return (
        <div>
            <div className="Seccion1">
              <section className="ContenedorInicial2">
                <div className="ContenedorInicio">
                  <h1>Reserva espacios o equipo dentro del Hub CSF</h1>
                  <p>Desarrolla tus habilidades al máximo</p>
                  <Button className="orangeFilledButton">
                      <NavLink to="/login" className={paths.home}>Registrate y empieza a reservar</NavLink>
                  </Button>
                </div>
              </section>
            </div>
            <div className="Seccion2">
                <div className="ContenidoSeccion2Reservas">
                    <div className="TextosReservas">
                        <h2>Puedes Reservar</h2>
                        <p>Al ser parte del hub puedes reservar espacios o equipos físicos</p>
                    </div>
                    <div className="ListasReservas">
                        <ul className="Listadesordenada">
                            <li>Equipos de computo</li>
                            <li>Equipos de redes</li>
                            <li>Equipos de electronica</li>
                            <li>Licencias de software</li>
                        </ul>
                    </div>
                </div>
                <div className="ImagenSeccion2Reservas">
                    <img src={cubeImg} alt="Esta el la imagen del cubito"/>
                </div>
            </div>

            <div className="Seccion3">
                <div className="ImageSeccion3">
                    <img src={graphImgs} alt="Imagen seccion 3 Reservas"/>
                </div>
                <div className="TextoSeccion3">
                    <h2>Revisa tus reservas</h2>
                    <p>Puedes ver tus reservas y el historial de reservas</p>
                    <ul>
                        <li>Revisa tus reservas actuales</li>
                        <li>Encuentra la ubicación de tus reservas</li>
                        <li>Ponte en contacto con los administradores del HUB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Reservas