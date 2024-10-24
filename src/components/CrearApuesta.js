import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";

export default class CrearApuesta extends Component {

    cajaId = React.createRef()
    cajaUsuario = React.createRef()
    cajaResultado = React.createRef()
    cajaFecha = React.createRef()

    state = {
        status:false
    }

    crearApuesta=(e)=>{
        e.preventDefault()

        let id = parseInt(this.cajaId.current.value)
        let usuario = this.cajaUsuario.current.value
        let resultado = this.cajaResultado.current.value
        let fecha = this.cajaFecha.current.value

        let apuesta = {
            idApuesta: id,
            usuario: usuario,
            resultado:resultado,
            fecha:fecha
        }

        let request = "api/apuestas"
        let url = Global.urlApiEjemplos + request

        axios.post(url, apuesta).then(response=>{
            this.setState({
                status:true
            })
        })


        


    }


  render() {

    if(this.state.status==true){
        <Navigate to="/apuestas"/>

    }else{
        return (
            <div>
              
              <div className="container">
                <form>
                <h1>Crear Apuesta</h1>
                  <input type="text" className="form-control" placeholder="id" ref={this.cajaId}/>
                  <input type="text" className="form-control" placeholder="usuario" ref={this.cajaUsuario}/>
                  <input type="text" className="form-control" placeholder="resultado" ref={this.cajaResultado}/>
                  <input type="text" className="form-control" placeholder="fecha" ref={this.cajaFecha}/>
                  <button className="btn btn-primary" onClick={this.crearApuesta}>
                      Crear
                  </button>
                </form>
              </div>
            </div>
          );
    }


    
  }
}
