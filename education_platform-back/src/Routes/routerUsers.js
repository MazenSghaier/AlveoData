import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { getUser, postUser, signin, signup } from '../Controllers/controllerUser.js'

const router = express.Router();

const users =[]

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/", getUser);

router.post('/',postUser);



export default router ;