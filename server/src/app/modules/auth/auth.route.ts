import express from 'express';
import {
  forgotPassword,
  loginWithSocialMedia,
  logout,
  resetPassword,
  signin,
  signup,
} from './auth.controller';

const router = express.Router();

// Define routes for signup and signin
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/login-with-social-media', loginWithSocialMedia);
router.patch('/reset-password/:token', resetPassword);

export const AuthRoutes = router;
