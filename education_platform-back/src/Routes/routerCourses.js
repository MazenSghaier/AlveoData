import express from 'express';

import { getCourses, getCourse, createCourse, updateCourse, likeCourse, deleteCourse } from '../Controllers/controllerCourse.js';

const router = express.Router();

import auth from "../middleware/auth.js";

router.get('/', getCourses);
router.get('/:number', getCourse);
router.post('/',auth,  createCourse);
router.patch('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);
router.patch('/:id/likeCourse', auth, likeCourse);

export default router;