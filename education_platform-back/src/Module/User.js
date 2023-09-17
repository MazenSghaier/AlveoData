import mongoose from 'mongoose';

// Define a Mongoose schema for Person
const userSchema = new mongoose.Schema({
  username: { type: String, required:  true },
  password: { type: String, required:  true },
  FName: String,
  LName: String,
  Email: { type: String, required:  true },
  birthday: { type: String, required:  true },
  joinDate: { type: String, required:  true },
  level : { type: String, required:  true },
  Status: String,
  Profile_Pic: String,
  id: { type: String },
});


// Create Mongoose models for User and User using their respective schemas
const UserModel = mongoose.model('User', userSchema);

export { UserModel };