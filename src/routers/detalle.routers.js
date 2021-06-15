import {Router} from 'express'

const router = Router();
import * as DetalleCtrl from '../controllers/detalle.controller'
const { checkToken } = require('../auth/token_validation');
router.get('/'  ,DetalleCtrl.readAllDetalles);
router.get('/:id'   , DetalleCtrl.readDetalle);
router.delete('/:id'  , DetalleCtrl.delDetalle);
router.post('/' , DetalleCtrl.createDetalle);
router.put('/:id' , DetalleCtrl.updateDetalle);
export default router;