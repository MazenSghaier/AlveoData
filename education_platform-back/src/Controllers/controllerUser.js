import { error } from 'console';
import { UserModel } from './../Module/User.js'
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name, birthday,country,joinDate,level } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name, birthday,country,joinDate,level});

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};


export const getUser = async (req,res) => {

   try{

        const getuser = await UserModel.find();
        console.log(getuser)

        res.status(200).json(getuser)

   }catch(err){
    res.status(404).json({ message: error.message})
   }
};

export const postUser = (req,res) => {

    // Create a new Person document
    const User = new UserModel({
        username: 'john_doe',
        password: 'hashed_password_here',
        FName: 'John',
        LName: 'Doe',
        Email: 'john@example.com',
        BD: '1990-01-01',
        Regrestration_Date: '2023-09-08',
        Status: 'Active',
        Profile_Pic: 'profile.jpg',
    });

    try{
        User.save()
        .then(() => {
        console.log('Person saved successfully.');
        })
        .catch((error) => {
        console.error('Error saving Person:', error);
        });

    }catch(err){

    res.status(409).json({ message: error.message})
    
   }
};

export const findUser = (req,res) => {
    const {id} =req.params;
 
     const foundUser = users.find((user) => user.id === id);
 
 
     res.send(foundUser);
 };

 export const deleteUser =  (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)
}

export const updateUser = async (req,res) => {
    const { id: _id } = req.params
    const user = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id')

    const updatedUser = UserModel.findByIdAndUpdate( _id , user , { new : true } );

    res.json(updatedUser)
}