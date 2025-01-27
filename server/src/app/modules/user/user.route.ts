import express from 'express';
import auth from '../../middlewares/auth';
import {
  getMe,
  updateMe,
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getTopUsers,
} from './user.controller';

const router = express.Router();
router.get('/top-followers', getTopUsers);
router.use(auth('admin', 'user'));

router.get('/me', getMe);
router.patch('/me', updateMe);
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export const UserRoutes = router;
