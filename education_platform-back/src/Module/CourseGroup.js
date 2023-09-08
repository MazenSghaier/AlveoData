import mongoose from 'mongoose';

// Define a Mongoose schema for Person
const courseGroupeSchema = new mongoose.Schema({
  courseGroupName: String,
  courseDescription: String,
  Last_update: Date 
});


// Create Mongoose models for Course and Course using their respective schemas
const CourseGroupeModel = mongoose.model('Course', courseGroupeSchema);

export { CourseGroupeModel };

