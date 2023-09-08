import { error } from 'console';
import { UserModel } from './../Module/User.js'



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