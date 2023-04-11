  import React, { Component } from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css'


  class FilaTablaRecetas extends Component{
    render() {
      const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
      return(<React.Fragment>

        <tr>
          <td>{this.props.NombreReceta}</td>
          <td>{this.props.Ingredientes}</td>
          <td>{this.props.Pasos}</td>
          <td>{this.props.TiempoCoccion}</td>
          <td>{this.props.FechaReceta}</td>
          <td><img src={this.props.ImagenReceta} alt="" style={inputStyleimg}></img></td>
          <td><button className='btn btn-primary'>Modificar</button></td>
        <td><button className='btn btn-primary' onClick={() => this.props.eliminarReceta(this.props._id)}>Eliminar</button></td>
        </tr>

      </React.Fragment>)
    }  
  }
  export default FilaTablaRecetas;