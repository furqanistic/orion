import express from 'express'
import { signin, signup } from '../controllers/auth.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// Signup
router.post('/signup', signup)
// SignIn
router.post('/signin', signin)

export default router
