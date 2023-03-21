

/*Clase Persona con su debido constructor */
class Persona{
  constructor(_id,
  Nombre,
  Apellido,
  Email,
  TipoUsuario,
  Password,
  Foto)

{
  this._id = _id;
  this.Nombre = Nombre;
  this.Apellido = Apellido;
  this.Email = Email;
  this.TipoUsuario = TipoUsuario;
  this.Password = Password;
  this.Foto = Foto;

}
/* Obtener el Schema */

Login(){

  let objectSend = this;
  return new Promise( function(resolve, reject){
      try {
          //Utiliz ala funcionalidad de "promesas" que ofrece JavaScript y el objeto de "XMLHttpRequest"
          var xhr = new XMLHttpRequest();
          xhr.open('POST','/api/signIn');
          xhr.setRequestHeader('Content-Type','application/json'); /*Mi api que hace un login */
              xhr.onload = function() {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.responseText));
                  }else{
                      reject(xhr);
                  }
                 
              };
              xhr.send(JSON.stringify(objectSend));    
      } catch (error) {
          reject(error.message);
      }
  });
}

Guardar(){ /* Funcion que llama desde routes */

  let objectSend = this;
  return new Promise( function(resolve, reject){
      try {
          
          var xhr = new XMLHttpRequest();
          xhr.open('PUT','/api/guardarUsuario');
          xhr.setRequestHeader('Content-Type','application/json');
              xhr.onload = function() {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.responseText));
                  }else{
                      reject(xhr);
                  }
                 
              };
              xhr.send(JSON.stringify(objectSend));    
      } catch (error) {
          reject(error.message);
      }
  });
}

Modificar(){ /* Funcion que llama desde routes */

  let objectSend = this;
  return new Promise( function(resolve, reject){
      try {
          
          var xhr = new XMLHttpRequest();
          xhr.open('POST','/api/modificaReceta'); /*Mi api que modifica */
          xhr.setRequestHeader('Content-Type','application/json');
              xhr.onload = function() {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.responseText));
                  }else{
                      reject(xhr);
                  }
                 
              };
              xhr.send(JSON.stringify(objectSend));    
      } catch (error) {
          reject(error.message);
      }
  });
}

Eliminar(){ /* Funcion que llama desde routes */

  let objectSend = this;
  return new Promise( function(resolve, reject){
      try {
          
          var xhr = new XMLHttpRequest();
          xhr.open('DELETE','/api/eliminaReceta');
          xhr.setRequestHeader('Content-Type','application/json'); /*Mi api que elimina */
              xhr.onload = function() {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.responseText));
                  }else{
                      reject(xhr);
                  }
                 
              };
              xhr.send(JSON.stringify(objectSend));    
      } catch (error) {
          reject(error.message);
      }
  });
}

SeleccionarTodos(){ /* Funcion que llama desde routes */

  let objectSend = this;
  return new Promise( function(resolve, reject){
      try {
          
          var xhr = new XMLHttpRequest();
          xhr.open('GET','/api/todaReceta'); /*Mi api que selecciona todos */
          xhr.setRequestHeader('Content-Type','application/json');
              xhr.onload = function() {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.responseText));
                  }else{
                      reject(xhr);
                  }
                 
              };
              xhr.send(JSON.stringify(objectSend));    
      } catch (error) {
          reject(error.message);
      }
  });
}

}