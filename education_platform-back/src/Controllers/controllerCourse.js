import express from 'express';
import { error } from 'console';
import { CourseModel } from '../Module/Course.js';

const router = express.Router();

export const getCourses = async (req, res) => { 
    try {
        const CourseModels = await CourseModel.find();
                
        res.status(200).json(CourseModels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 
export const getCourse = async (req, res) => { 
    const targetNumber = req.params.number;

    try {
        const course = await CourseModel.findOne({ number: targetNumber });
        
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCourse = async (req, res) => {
    const course = req.body;

    const newCourseModel = new CourseModel({ ...course, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newCourseModel.save();

        res.status(201).json(newCourseModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);

    const updatedCourse = { creator, title, message, tags, selectedFile, _id: id };

    await CourseModel.findByIdAndUpdate(id, updatedCourse, { new: true });

    res.json(updatedCourse);
}

export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Course with id: ${id}`);

    await CourseModel.findByIdAndRemove(id);

    res.json({ message: "Course deleted successfully." });
}

export const likeCourse = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Course with id: ${id}`);
    
    const course = await CourseModel.findById(id);

    const index = course.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      course.likes.push(req.userId);
    } else {
      course.likes = course.likes.filter((id) => id !== String(req.userId));
    }
    const updatedCourse = await CourseModel.findByIdAndUpdate(id, course, { new: true });
    res.status(200).json(updatedCourse);
}


export default router;