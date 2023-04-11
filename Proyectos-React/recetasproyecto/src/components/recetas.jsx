import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilaTablaRecetas from './filaTablaRecetas';


class Recetas extends Component{
    state={
      Libro :{
       
        _id:"",
        NombreReceta:"",
        Ingredientes: "",
        Pasos: "",
        TiempoCoccion: "",
        FechaReceta: "",
        ImagenReceta:""
    },
    recetasActuales:[]  
    }
    render(){
        const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
            const oculta = { visibility: 'collapse'}
              const muestra = { visibility: 'vivible' }
        return (<React.Fragment>
                <input type='text'  id='_id' placeholder = 'Identificador' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='text' className='form-control' id='NombreReceta' onChange = {(evt) => this.actualizaDatosAGuardar(evt)} placeholder = 'Escriba el nombre de su receta'/>
                    <input type ='text' id='Ingredientes' placeholder = 'Escriba los ingredientes' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='text' id='Pasos' placeholder = 'Escriba los pasos' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='number' id='TiempoCoccion' placeholder = 'Escriba el tiempo de cocción' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='date' id='FechaReceta' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ="file" className="form-control" id="ImagenReceta" onChange={ evt => this._onChange(evt)} />
               
              <input type= 'button' className='btn btn-primary' id='botonGuardar' value='Guardar'  onClick={this.guardarLibro} />
             
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Ingredientes</th>
                                <th scope='col'>Pasos</th>
                                <th scope='col'>Tiempo de cocción</th>
                                <th scope='col'>Fecha de creación</th>
                                <th scope='col'>Imagen</th>
                                <th scope='col'>Modificar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>    
                        </thead>    
                        <tbody id='filasTabla'>
                            {this.state.recetasActuales.map(op => <FilaTablaRecetas 
                            _id={op._id}  NombreReceta = {op.NombreReceta} Ingredientes = {op.Ingredientes} 
                            Pasos = {op.Pasos} TiempoCoccion = {op.TiempoCoccion} 
                            FechaReceta = {op.FechaReceta} ImagenReceta = {op.ImagenReceta} eliminarReceta={this.eliminarReceta}/>)}
                        </tbody>
                    </table>              
            </React.Fragment>
               );
    }

 _onChange = (e) => {
        var objLocalLibro = new Object();
            objLocalLibro= this.state.Libro
            if (e.target.files && e.target.files[0]) {
                if (e.target.files[0].size < 2097152) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                      objLocalLibro.ImagenReceta  = e.target.result
                    };
                    reader.readAsDataURL(e.target.files[0]);
               
                           this.setState({
                                            Libro: objLocalLibro
                                        });

                }
               
            }
    console.log(e)
}


actualizaDatosAGuardar(evt)
{
    var objLocalLibro= new Object();
   
    objLocalLibro= this.state.Libro
    switch(evt.target.id)
        {
            case "NombreReceta":
                {
                    console.log(this.state.Libro)
                    objLocalLibro.NombreReceta= evt.target.value;
                    break;
                }
            case "Ingredientes":
                {
                    console.log(this.state.Libro)
                    objLocalLibro.Ingredientes= evt.target.value;
                    break;
                }
            case "Pasos":
                {
                    console.log(this.state.Libro)
                    objLocalLibro.Pasos= evt.target.value;
                    break;
                }
            case "TiempoCoccion":
                {
                    console.log(this.state.Libro)
                    objLocalLibro.TiempoCoccion= evt.target.value;
                    break;
                }
            case "FechaReceta":
                {
                    console.log(this.state.Libro)
                    objLocalLibro.FechaReceta= evt.target.value;
                    break;
                }
            case "ImagenReceta":
                {
                    console.log(this.state.Libro)
                    objLocalLibro.ImagenReceta= evt.target.value;
                    break;
                }
               
        }
   
        this.setState({
          Libro: objLocalLibro
    })
   
   
}

eliminarReceta = (id) => {
    console.log(id)
    
    var objLocal = this.state.Libro
    objLocal._id = id
    const recipeUrl = 'http://localhost:8080/api/eliminaReceta'; 
    const requestMetadata = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(objLocal)
    };
    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(Libros => {
            console.log(Libros)
            this.setState({
                recetasActuales: Libros
            })
                              
        alert("Eliminado");
        });
}

guardarLibro = () => {
    // With all properties
   var objLocal = this.state.Libro
   // const Url = 'https://kongzilla.herokuapp.com/api/guardarLibro&#39;;
   const recipeUrl = 'http://localhost:8080/api/nuevaReceta';
  const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objLocal)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(Libros => {
            console.log(Libros)
            this.setState({
                recetasActuales: Libros
            })
                              
        alert("Guardado");
        });
}
   

}
export default Recetas;