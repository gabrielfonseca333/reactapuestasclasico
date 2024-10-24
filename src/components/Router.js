import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Equipos from './Equipos'
import Apuestas from './Apuestas'
import CrearApuesta from './CrearApuesta'

export default class Router extends Component {
  render() {

    function EquipoElement(){

        let {id} = useParams()


        return <Equipos id={id}/>
    }



    return (
      <div>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/equipo/:id' element={<EquipoElement/>}></Route>
                <Route path='/apuestas' element={<Apuestas/>}></Route>
                <Route path='/create' element={<CrearApuesta/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
