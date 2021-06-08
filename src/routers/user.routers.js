import {Router} from 'express'

const router = Router();
import * as UserCtrl from '../controllers/user.controller'
const { checkToken } = require('../auth/token_validation');
router.get('/' , checkToken ,UserCtrl.readAllUsers);
router.get('/:id', checkToken , checkToken  , UserCtrl.readUser);
router.delete('/:id' , checkToken , UserCtrl.delUser);
router.post('/' , checkToken , UserCtrl.createUser);
router.put('/:id' ,checkToken  , UserCtrl.updateUser);
export default router;