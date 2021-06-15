import {Router} from 'express'

const router = Router();
import * as VentasCtrl from '../controllers/ventas.controller'
const { checkToken } = require('../auth/token_validation');
router.get('/'  ,VentasCtrl.readAllVentas);
router.get('/:id'  , VentasCtrl.readVenta);
router.delete('/:id'  , VentasCtrl.delVenta);
router.post('/'  , VentasCtrl.createDetalle);
router.put('/:id'  , VentasCtrl.updateVenta);
export default router;