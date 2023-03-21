
let mongoose = require('mongoose');
let Schema = mongoose.Schema; /* Esqueleto de mongoose que se va a replicar */
let recetaEnMongo = new Schema(
{
    NombreReceta:String,
    Ingredientes:String,
    Pasos:String,
    TiempoCoccion:Number,
    FechaReceta:Date,
    ImagenReceta:String
});
module.exports = mongoose.model('RecetaEnMongo',recetaEnMongo); /* Conectar JS con JS */