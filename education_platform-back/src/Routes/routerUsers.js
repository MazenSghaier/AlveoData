import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { getUser, postUser, findUser, deleteUser } from '../Controllers/controllerUser.js'

const router = express.Router();

const users =[]

router.get("/", getUser);

router.post('/',postUser);

router.get('/:id',findUser)

router.delete('/:id', deleteUser)

export default router ;