const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const mysqlConnection = require('express-myconnection');
const app = express();

//importando routes
const customerRoutes = require('./routes/customer');


//configurando express
//configurando el puerto
app.set('port', process.env.PORT || 3000);
//configurando el motor de plantillas
app.set('view engine','ejs');
//ruta de mis views
app.set('views',path.join(__dirname,'views'));

//configurando los middlewares
app.use(morgan('dev'));
//configuracion a mysql
app.use(mysqlConnection(mysql, {
    host: 'localhost',
    user:'root',
    password:'root',
    port:3308,
    database: 'crud-nodejs-mysql'
},'single'));

//desde el modulo de express estamos requirindo un metodo q nos va a permitir poder entender todos los datos q vengan desde el formulario
app.use(express.urlencoded({extended:false}));


//routes
app.use('/', customerRoutes);


//static Files(archivos css, js, etc)
app.use(express.static(path.join(__dirname, 'public')));


//inicializando el servidor
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});