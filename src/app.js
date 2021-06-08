import express from 'express'
import morgan from 'morgan'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

// servicop get

app.get('/' , function (req , res , next){
    res.send('Bienvenido a Node JS , Sistema de Ventas!..');
});

export default app;