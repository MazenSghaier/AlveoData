import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { getUser, postUser, signin, signup , updateUser } from '../Controllers/controllerUser.js'

const router = express.Router();
import auth from "../middleware/auth.js";
const users =[]

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/:id",auth, getUser);

router.post('/',postUser);

router.patch('/:id',auth,updateUser)


export default router ;