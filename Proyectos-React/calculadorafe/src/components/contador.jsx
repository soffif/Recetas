import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends Component{
  state = {
    count:0,
    imageUrl: 'https://picsum.photos/200',
    address:{
      street:''
    },
    otraVariable:0
  }
  render() {
    return (<React.Fragment>
      <h1>Hola mundo de nuevo</h1>
      <p>Este es un cambio</p>
      <img src={this.state.imageUrl} />
      <h3 className='badge badge-primary m-2'>{this.state.count}</h3>
      <h3>Contador en letras: {this.numeroaLetra()}</h3>
      <button onClick= { () => this.incrementaEnUno()}> Increment </button>
    </React.Fragment>);
  }
  numeroaLetra(){
    if(this.state.count === 0){ /* Que sea exactamente igual, hasta el tipo de variable */
      return <strong>Numero cero</strong>;
    }
    else{
      return <strong>Numero mayor a cero</strong>;   
    }
}
  incrementaEnUno(){
    this.setState({ count: this.state.count+1})
    console.log("Hola")
  }
}

export default Counter;