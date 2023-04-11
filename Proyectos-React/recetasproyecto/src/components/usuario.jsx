import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilaTablaUsuario from './filaTablaUsuario';


class Usuario extends Component{
    state={
      Persona :{
       
        _id:"",
        Nombre:"",
        Apellido: "",
        Email: "",
        TipoUsuario: "",
        Password: "",
        Foto:""
    },  
    usuariosActuales:[]
    }
    render(){
        const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
            const oculta = { visibility: 'collapse'}
              const muestra = { visibility: 'vivible' }
        return (<React.Fragment>
                <input type='text'  id='_id' placeholder = 'Identificador' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='text' className='form-control' id='Nombre' onChange = {(evt) => this.actualizaDatosAGuardar(evt)} placeholder = 'Escriba el nombre de su receta'/>
                    <input type ='text' id='Apellido' placeholder = 'Escriba sus apelllidos' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='text' id='Email' placeholder = 'Escriba su email' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='text' id='TipoUsuario' placeholder = 'Escriba el rol de usuario' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ='password' id='Password' placeholder = 'Digite su contraseña' onChange = {(evt) => this.actualizaDatosAGuardar(evt)}/>
                    <input type ="file" className="form-control" id="Foto" onChange={ evt => this._onChange(evt)} />
               
              <input type= 'button' className='btn btn-primary' id='botonGuardar' value='Guardar'  onClick={this.guardarPersona} />
             
              <table className="table">
                        <thead>
                            <tr>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Apellidos</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Rol de usuario</th>
                                <th scope='col'>Contraseña</th>
                                <th scope='col'>Foto</th>
                                <th scope='col'>Modificar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>    
                        </thead>    
                        <tbody id='filasTabla'>
                            {this.state.usuariosActuales.map(op => <FilaTablaUsuario 
                            Nombre = {op.Nombre} Apellido = {op.Apellido} 
                            Email = {op.Email} TipoUsuario = {op.TipoUsuario} 
                            Password = {op.Password} Foto = {op.Foto} />)}
                        </tbody>
                    </table>         

            </React.Fragment>
               );
    }

 _onChange = (e) => {
        var objLocalPersona = new Object();
            objLocalPersona= this.state.Persona
            if (e.target.files && e.target.files[0]) {
                if (e.target.files[0].size < 2097152) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                      objLocalPersona.Foto  = e.target.result
                    };
                    reader.readAsDataURL(e.target.files[0]);
               
                           this.setState({
                                            Persona: objLocalPersona
                                        });

                }
               
            }
    console.log(e)
}


actualizaDatosAGuardar(evt)
{
    var objLocalPersona= new Object();
   
    objLocalPersona= this.state.Persona
    switch(evt.target.id)
        {
            case "Nombre":
                {
                    console.log(this.state.Persona)
                    objLocalPersona.Nombre= evt.target.value;
                    break;
                }
            case "Apellido":
                {
                    console.log(this.state.Persona)
                    objLocalPersona.Apellido= evt.target.value;
                    break;
                }
            case "Email":
                {
                    console.log(this.state.Persona)
                    objLocalPersona.Email= evt.target.value;
                    break;
                }
            case "TipoUsuario":
                {
                    console.log(this.state.Persona)
                    objLocalPersona.TipoUsuario= evt.target.value;
                    break;
                }
            case "Password":
                {
                    console.log(this.state.Persona)
                    objLocalPersona.Password= evt.target.value;
                    break;
                }
            case "Foto":
                {
                    console.log(this.state.Persona)
                    objLocalPersona.Foto= evt.target.value;
                    break;
                }
               
        }
   
        this.setState({
          Persona: objLocalPersona
    })
   
   
}

eliminarUsuario = (id) => {
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

guardarPersona = () => {
    // With all properties
   var objLocal = this.state.Persona
   // const Url = 'https://kongzilla.herokuapp.com/api/guardarPersona&#39;;
   const recipeUrl = 'http://localhost:8080/api/guardarUsuario';
  const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objLocal)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(Personas => {
            console.log(Personas)
            this.setState({
                usuariosActuales: Personas
            })
       
      
        alert("Guardado");
        });
}
   

}
export default Usuario;