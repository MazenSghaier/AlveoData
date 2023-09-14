import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { postCourse , getCourse, findCourse, deleteCourse } from '../Controllers/controllerCourse.js'

const router = express.Router();

const courses =[]

router.get("/", getCourse);

router.post('/',postCourse);

router.get('/:id',findCourse)

router.delete('/:id', deleteCourse)

export default router ;