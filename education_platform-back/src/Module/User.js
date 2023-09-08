import mongoose from 'mongoose';

// Define a Mongoose schema for Person
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  FName: String,
  LName: String,
  Email: String,
  BD: String,
  Regrestration_Date: String,
  Status: String,
  Profile_Pic: String,
});


// Create Mongoose models for User and User using their respective schemas
const UserModel = mongoose.model('User', userSchema);

export { UserModel };