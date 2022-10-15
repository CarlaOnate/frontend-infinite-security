import React from "react";
import { Button, Image } from "antd";
import CajaNumeros from "../components/NumberBox"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import lockImg from '../images/Candado.jpg';
import dataEncryption from '../images/data-encryption.png';
import iosLogo from '../images/IOS.png';

const Pantallaprincipal = ()=>{

    const navigate = useLocation()

    const paths = {
        home: navigate.pathname === 'reserves'
    };

    return(
        <div>
            <div className="PrimeraSeccion">
                <section className="ContenedorInicial1">
                    <div className="ContenedorInicio">
                        <h1>HUB de Ciberseguridad Campus Santa Fe</h1>
                        <h3>Primera institución especializada en la ciberseguridad mexicana</h3>
                        <Button className="landing__button">
                            <NavLink to="reserves" className={paths.home}>Descubre más</NavLink>
                        </Button>
                    </div>
                </section>
            </div>

            <div>
                <section className="CajaNaranja">
                  <p>
                    Porque la seguridad siempre es lo primero.
                    Descubre porque somos la mejor institución en ciberseguridad.
                  </p>
                </section>
            </div>
            
            <div className="SegundaSeccion">
                <div className="CajaTexto">
                  <h3>¿Porque nosotros?</h3>
                  <p>Somos una organización líder en ciberseguridad.</p>
                  <p>Apoyamos a crear una sociedad más segura</p>
                </div>
                <div className="Numeros">
                    <div>
                      <div className="landing__2__boxnumbers">01</div>
                      <p>Impulsamos el desarrollo del primer ecosistema de este tipo en México y Latinoamérica</p>
                    </div>
                    <div>
                      <div className="landing__2__boxnumbers">02</div>
                      <p>Brindamos soporte para que cualquier organización o empresa salvaguarde información estratégica.</p>
                    </div>
                    <div>
                      <div className="landing__2__boxnumbers">03</div>
                      <p>Creamos programas de difusión y concientización sobre la necesidad permanente de contar con herramientas, personal capacitado y los servicios alrededor de la ciberseguridad.</p>
                    </div>
                    <div>
                      <div className="landing__2__boxnumbers">04</div>
                      <p>Buscamos el florecimiento humano a través del liderazgo, el emprendimiento y la innovación.</p>
                    </div>
              </div>
            </div>
            <div className="landing__img__3">
              <div />
            </div>
            <div className="TerceraSeccion">
                <h3>¿Porque nosotros?</h3>
                <div className="Cajitas">
                  <div className="Cajitasseccion3">
                    <div>
                      <img src={lockImg} alt="yellow lock"/>
                      <p>Ayudamos a crear una cultura de ciberseguridad</p>
                    </div>
                    <div>
                      <img src={dataEncryption} alt="yellow lock"/>
                      <p>Diseñamos estrategias para empresas</p>
                    </div>
                    <div>
                      <img src={dataEncryption} alt="yellow lock"/>
                      <p>Diseñamos el maañana hoy</p>
                    </div>
                  </div>
                  <div className="Cajitasseccion3">
                    <div>
                      <img src={lockImg} alt="yellow lock"/>
                      <p>Ayudamos a crear una cultura de ciberseguridad</p>
                    </div>
                    <div>
                      <img src={dataEncryption} alt="yellow lock"/>
                      <p>Diseñamos estrategias para empresas</p>
                    </div>
                    <div>
                      <img src={dataEncryption} alt="yellow lock"/>
                      <p>Diseñamos el maañana hoy</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="CuartaSeccion">
                <div className="Contenedorflexcuartaseccion">
                    <h3 className="CajaTexto2">Descubre la app</h3>
                    <p>Bajala de la App Store y descrubre su potencial</p>
                    <Button className='CodigoPeque'>Descarga aquí</Button>
                </div>
                <div className="landing__appImg">
                    <img src={iosLogo} alt="Imagen IOS"/>
                </div>
            </div>

        </div>

    )
}

export default Pantallaprincipal