import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './components/Badge'
// que EventTarget, atributos y el children
// const element = React.createElement('h1', {}, 'Hola! Soy los children')

const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container)
