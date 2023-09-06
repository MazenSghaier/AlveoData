import * as bcrypt from 'bcrypt';
import { Person } from './Persone';

export class User extends Person{

   
    constructor(_id: string, FName: string, LName: string, Email: string, username: string,password: string, BD: string, Regrestration_Date: string, Status: string, Profile_Pic: string) {
    
      super(_id,FName,LName,Email,username,password,BD,Regrestration_Date, Status, Profile_Pic)
  
  }

  isValidEmail(email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Use the regex.test() method to check if the email matches the pattern
    return emailRegex.test(email);
  }
  
  isValidUserPicture(pictureUrl: string): boolean {
    // Regular expression to check if the URL points to an image file
    const imageFileExtensions = /\.(jpg|jpeg|png|gif|bmp)$/i;

    // Use the regex.test() method to check if the URL matches the image file extension pattern
    return imageFileExtensions.test(pictureUrl);
  }

  async hashPassword(password: string): Promise<string> {
    // Generate a salt to add to the password before hashing
    const saltRounds = 10; // You can adjust this according to your security needs
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  }

  async verifyPassword(password: string): Promise<boolean> {
    // Compare the provided password with the hashed password stored in the database
    return await bcrypt.compare(password, this.password); // Assuming you have a password hash stored in this.passwordHash
  }

  toJSON(): Record<string, any> {
    return {

      _id: this._id,
      username: this.username,
      password: this.password,
      email: this.Email,
      FName:this.FName,
      LName: this.LName,
      BD: this.BD,
      Regrestration_Date: this.Regrestration_Date,
      Status: this.Status,
      Profile_Pic: this.Profile_Pic,
      
  }
}

  async save(): Promise<void> {
    // Implement logic to save the user to the database
  }
  
  
  async update(): Promise<void> {
    // Implement logic to update the user in the database
  }
  
  async delete(): Promise<void> {
    // Implement logic to delete the user from the database
  }

}
