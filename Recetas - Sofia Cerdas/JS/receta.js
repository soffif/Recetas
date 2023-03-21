

/*Clase Libro con su debido constructor */
class Libro{
    constructor(_id,
    NombreReceta,
    Ingredientes,
    Pasos,
    TiempoCoccion,
    FechaReceta,
    ImagenReceta)

{
    this._id = _id;
    this.NombreReceta = NombreReceta;
    this.Ingredientes = Ingredientes;
    this.Pasos = Pasos;
    this.TiempoCoccion = TiempoCoccion;
    this.FechaReceta = FechaReceta;
    this.ImagenReceta = ImagenReceta;

}
/* Obtener el Schema */

Guardar(){ /* Funcion que llama desde routes */

    let objectSend = this;
    return new Promise( function(resolve, reject){
        try {
            
            var xhr = new XMLHttpRequest();
            xhr.open('PUT','/api/nuevaReceta');
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