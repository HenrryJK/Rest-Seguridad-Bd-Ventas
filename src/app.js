import express from 'express'
import morgan from 'morgan'
import usersRouters  from './routers/user.routers';

import rolesRouters  from './routers/rol.routers';
import empleadoRouters  from './routers/empleado.routers';
import detalleRouters  from './routers/detalle.routers';
import ventasRouters  from './routers/ventas.routers';
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

// servicop get

app.get('/' , function (req , res , next){
    res.send('Bienvenido a Node JS , Sistema de Ventas!..');
});

app.use('/api/auth/users' , usersRouters);
app.use('/api/auth/roles' , rolesRouters);
app.use('/api/auth/empleados' , empleadoRouters);
app.use('/api/auth/detalle' , detalleRouters);
app.use('/api/auth/ventas' , ventasRouters);
export default app;