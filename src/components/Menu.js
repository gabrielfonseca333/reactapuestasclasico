import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {

    state = {
        equipos : []
    }

    loadEquipos=()=>{
        let request = "api/equipos"
        let url = Global.urlApiEjemplos + request
        axios.get(url).then(response=>{
            this.setState({
                equipos:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadEquipos()
    }




  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Gabriel Fonseca
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/apuestas">
                    Apuestas
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Equipos
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >

                    {
                        //aqui es donde deben ir los li con los equipos xd
                        this.state.equipos.map((equipo, index)=>{
                            return(<li key={index}><NavLink to={"/equipo/"+equipo.idEquipo}>{equipo.nombre}</NavLink></li>)
                        })

                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
