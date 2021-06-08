import {Router} from 'express'

const router = Router();
import * as RolCtrl from '../controllers/rol.controller'

router.get('/'  ,RolCtrl.readAllRoles);
router.get('/:id'  , RolCtrl.readRol);
router.delete('/:id' , RolCtrl.delRol);
router.post('/', RolCtrl.createRol);
router.put('/:id'  , RolCtrl.updateRol);
export default router;