
let  express = require('express');
let  app = express(); //El parametro que contiene la libreria
let  mongoose = require('mongoose'); /*Base de datos MongoDB*/
let  port = process.env.PORT || 8080; //El puerto que se utiliza y se coloc en la URL del navegador

app.configure(function() {
//    app.use(express.static(__dirname + '/')); Configuracion en el URL
app.use(express.logger('dev'));
app.use(express.methodOverride());
});

const mongoAtlasUri = 'mongodb+srv://sofif:10.01.06.So@cluster0.tm8bghj.mongodb.net/?retryWrites=true&w=majority';
    /* Llave con el password */
    try {
        mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true},
            () =>
            console.log("Connected")
            );
    } catch (error) {
        console.log("Couldn't get connected");
    } /*Llave conectora - Try and catch por si se pierde la conexion */

const dbConnection = mongoose.connection; /*Conexion con MongoDB */
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));


var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    require('./routes.js')(app);  
    // Distintas rutas para no sobrecargar el server.js
    

app.listen(port);
console.log("APP por el puerto "+port);
