import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom'

export default class Apuestas extends Component {


    state = {
        apuestas:[]
    }

    loadApuestas=()=>{
        let request = "api/apuestas"
        let url = Global.urlApiEjemplos + request
        axios.get(url).then(response=>{
            this.setState({
                apuestas:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadApuestas()
    }




  render() {
    return (
      <div>
        <h1>Apuestas</h1>
    
            <NavLink className="btn btn-primary" to="/create">Crear apuesta</NavLink>



        <hr/>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>idApuesta</th>
                    <th>usuario</th>
                    <th>resultado</th>
                    <th>fecha</th>
                </tr>
            </thead>
            <tbody>
                {
                    //tr con td para el resultado
                    this.state.apuestas.map((apuesta, index)=>{
                        return <tr key={index}>
                            <td key={index}>{apuesta.idApuesta}</td>
                            <td key={index}>{apuesta.usuario}</td>
                            <td key={index}>{apuesta.resultado}</td>
                            <td key={index}>{apuesta.fecha}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
