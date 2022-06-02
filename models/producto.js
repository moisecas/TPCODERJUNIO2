//conexión a base de datos mongodb. Cada vez que cree una instancia de mongoose, se crea una conexión a la base de datos.
//por ejemplo si creo la colección clientes, debo crear otro modelo con su schema. 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  name:  String,
  price: Number,
  image: String,
  stock: Number
});

// Crear el modelo
const Productos = mongoose.model('producto', productoSchema);

module.exports = Productos; //exportar el modelo para poder usarlo en otros archivos de la aplicación (index.js)

