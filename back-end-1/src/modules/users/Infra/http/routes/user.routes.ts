import { Router } from 'express';
import multer from 'multer';

import upLoadConfig from '@config/upaload';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(upLoadConfig);
const userController = new UserController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
