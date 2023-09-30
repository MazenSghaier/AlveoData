

import mongoose from 'mongoose';

// Define a Mongoose schema for Person
const courseSchema = new mongoose.Schema({
  number: { type: String, required:  true },
  courses:{
    title: { type: String, required:  true },
    name: { type: String, required:  true },
    image: { type: String, required:  true },
    video: { type: String, required:  true },
    duration: { type: String, required:  true },
    finished:{ type: String },
 },
  id: { type: String },
  comments: { 
    body: { type: String, required:  true },
    username: { type: String, required:  true },
    userId: { type: String, required:  true },
    parentId: { type: String, required:  true },
    SubjectId: { type: String, required:  true },
    createdAt: { type: String, required:  true },
    },
});


// Create Mongoose models for Course and Course using their respective schemas
const CourseModel = mongoose.model('Course', courseSchema);

export { CourseModel };