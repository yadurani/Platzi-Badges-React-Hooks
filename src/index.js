import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badges from './pages/Badges'
// que EventTarget, atributos y el children
// const element = React.createElement('h1', {}, 'Hola! Soy los children')

const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges />, container)
