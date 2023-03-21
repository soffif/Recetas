
let controllerReceta = require('./controllerReceta.js')
let controllerPersona = require('./controllerPersona.js')

module.exports = function(app) //Exporta la funcion anonima "app" en el module
{

    app.get('/recetas', 
        function (req,res) {
            res.sendfile('inicioReceta.html');
        }); //Agarra mis archivos y los pasa por el routes

    app.get('/loginStart', 
        function (req,res) {
            res.sendfile('login.html');
        }); //Agarra mis archivos y los pasa por el routes

    app.get('/login', 
        function (req,res) {
            res.sendfile('inicioLogin.html');
        }); //Agarra mis archivos y los pasa por el routes


    var Persona = require('./personaMongo');
    app.get('/inicioReceta', 
        function (req,res) {
            Persona.find({Email:req.query.Email,Password:req.query.Password},
                function (err,persona) {
                    if(err){
                        res.send(err);
                    }
                    else{
                        if(persona.length > 0){
                            res.sendfile('./inicioReceta.html');
                        }
                        else{
                            res.json("Error de seguridad");
                        }
                    }
                }
            );
        }); //Pasar datos por el URL

    app.get('/loginStart', 
        function (req,res) {
            res.sendfile('login.html');
        }); //Agarra mis archivos y los pasa por el routes


    app.get('/recetaJavascript', 
        function (req,res) {
            res.sendfile('./JS/receta.js');
        });
        
    app.get('/personaJavascript', 
        function (req,res) {
            res.sendfile('./JS/persona.js');
        });
        
    app.get('/recetaEstilos', 
        function (req,res) {
            res.sendfile('./CSS/receta.css');
        });

    app.get('/loginEstilos', 
        function (req,res) {
            res.sendfile('./CSS/login.css');
        });

    app.get('/faviconReceta',  
        function (req,res) {
            res.sendfile('./images/7585926.png');
        });    

        app.get('/imagenEstilos',  
        function (req,res) {
            res.sendfile('./images/FINAL BACKGROUND.png');
        }); 
    

    //Crea las apis y se va a las funciones respectivas    
    app.put('/api/nuevaReceta', controllerReceta.Guardar);
    app.post('/api/modificaReceta', controllerReceta.Modificar);
    app.delete('/api/eliminaReceta', controllerReceta.Eliminar);
    app.get('/api/todaReceta', controllerReceta.SeleccionarTodos);
    app.post('/api/signIn', controllerPersona.Login);
    app.put('/api/guardarUsuario', controllerPersona.Guardar);
};