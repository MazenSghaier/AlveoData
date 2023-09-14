import { error } from 'console';
import { CourseModel } from '../Module/Course.js';


export const getCourse = async (req,res) => {

   try{
        const getcourse = await CourseModel.find();
        console.log(getcourse)

        res.status(200).json(getcourse)

   }catch(err){
    res.status(404).json({ message: error.message})
   }
};

export const postCourse = async (req,res) => {

    // Create a new Person document
    const Course = new CourseModel({
        courseName: 'Linear agression',
        courseDescription: 'hashed_password_here',
        Level: 'karkar',
        Course_Pic: 'image_9.jpg',
        Course_Video: 'Video_6.mp4',
        Last_update: '2022-11-11',
    });

    try {
        // Attempt to save the course to the database
        await Course.save();
        console.log('Course saved successfully.');
        res.status(201).json(Course); // Respond with the saved course
    } catch (err) {
        console.error('Error saving Course:', err);
        res.status(500).json({ message: 'Error saving Course.' });
    }
};

export const findCourse = (req,res) => {
    const {id} =req.params;
 
     const findcourse = courses.find((course) => course.id === id);
 
 
     res.send(findcourse);
 };

 export const deleteCourse =  (req,res) => {
    const { id } = req.params;

    courses = courses.filter((course) => course.id !== id)
}
