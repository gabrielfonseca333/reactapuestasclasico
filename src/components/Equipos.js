import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'


export default class Equipos extends Component {

    state = {
        equipo: null
    }

    loadEquipo=()=>{
        let id = parseInt(this.props.id)
        console.log("🚀 ~ Equipos ~ id:", id)
        let request = "api/equipos/" + id
        let url = Global.urlApiEjemplos + request
        axios.get(url).then(response=>{
            this.setState({
                equipo:response.data
            })
        })
    }

    
    componentDidMount=()=>{
        this.loadEquipo()
    }

    componentDidUpdate=(prevProps)=>{

        if(this.props.id != prevProps.id){
            this.loadEquipo()
        }

    }



  render() {
    return (
      <div>
        {
            this.state.equipo &&
            <div>
                <h1>{this.state.equipo.nombre}</h1>
                <img style={{width:"250px"}} src={this.state.equipo.imagen}/>
                <hr/>
                <p>{this.state.equipo.descripcion}</p>
            </div>
        }
        
      </div>
    )
  }
}
