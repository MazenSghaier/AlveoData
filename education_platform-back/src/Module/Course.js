

import mongoose from 'mongoose';

// Define a Mongoose schema for Person
const courseSchema = new mongoose.Schema({
  title: { type: String, required:  true },
  name: { type: String, required:  true },
  image: { type: String, required:  true },
  video: { type: String, required:  true },
  duration: { type: String, required:  true },
  id: { type: String },
});


// Create Mongoose models for Course and Course using their respective schemas
const CourseModel = mongoose.model('Course', courseSchema);

export { CourseModel };