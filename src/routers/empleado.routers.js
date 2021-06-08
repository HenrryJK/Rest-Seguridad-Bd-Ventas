import {Router} from 'express'

const router = Router();
import * as EmpleadoCtrl from '../controllers/empleado.controller'

router.get('/'  ,EmpleadoCtrl.readAllEmpleados);
router.get('/:id'  , EmpleadoCtrl.readEmpleado);
router.delete('/:id' , EmpleadoCtrl.delEmpleado);
router.post('/', EmpleadoCtrl.createEmpleado);
router.put('/:id'  , EmpleadoCtrl.updateEmpleado);
export default router;