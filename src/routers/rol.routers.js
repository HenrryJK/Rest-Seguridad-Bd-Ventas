import {Router} from 'express'

const router = Router();
import * as RolCtrl from '../controllers/rol.controller'
const { checkToken } = require('../auth/token_validation');
router.get('/' ,checkToken  ,RolCtrl.readAllRoles);
router.get('/:id',checkToken  , RolCtrl.readRol);
router.delete('/:id' , checkToken , RolCtrl.delRol);
router.post('/', checkToken , RolCtrl.createRol);
router.put('/:id', checkToken  , RolCtrl.updateRol);
export default router;