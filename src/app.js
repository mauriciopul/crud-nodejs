const path = require ('path');
const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');

const app = express();

//Conectando a la base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));



//importar rutas
const indexRoutes = require('./routes/index');


//configuraciones
//Toma el puerto que asigna el S.O. si no esta libre entonces asigna el puerto 3000
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views'));//el comando __dirname indica la ubicación actual de este archivo
app.set ('view engine', 'ejs')



//middelwares (una funcion que se ejecuta antes de llegar a las rutas)
app.use(morgan('dev'));
app.use (express.urlencoded({extended: false}));


//rutas (routes)
app.use ('/', indexRoutes);

//iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
})