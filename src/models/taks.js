const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TareaEsquema = new Schema({
    titulo: String,
    descripcion: String,
    stado: {
        type: Boolean,
        default: false
    }
})

module.exports= mongoose.model('tareas',TareaEsquema);


