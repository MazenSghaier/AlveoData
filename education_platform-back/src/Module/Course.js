

import mongoose from 'mongoose';

// Define a Mongoose schema for Person
const courseSchema = new mongoose.Schema({
  courseName: String,
  courseDescription: String,
  Level: String,
  Course_Pic: String,
  Course_Video: String,
  Last_update: String,
});


// Create Mongoose models for Course and Course using their respective schemas
const CourseModel = mongoose.model('Course', courseSchema);

export { CourseModel };