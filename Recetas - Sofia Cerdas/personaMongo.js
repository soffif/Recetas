
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const persona = Schema({
  Nombre: String,
  Apellido: String,
  Email: String,
  TipoUsuario: String,
  Password: String,
  Foto: String
});


module.exports = mongoose.model('Persona',persona)