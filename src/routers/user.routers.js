import {Router} from 'express'

const router = Router();
import * as UserCtrl from '../controllers/user.controller'

router.get('/'  ,UserCtrl.readAllUsers);
router.get('/:id'  , UserCtrl.readUser);
router.delete('/:id' , UserCtrl.delUser);
router.post('/', UserCtrl.createUser);
router.put('/:id'  , UserCtrl.updateUser);
export default router;