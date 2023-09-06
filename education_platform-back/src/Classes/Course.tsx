


export class Course {

    _id: string;
    courseName: string;
    courseDescription:string;
    Level: string;
    Course_Pic: string;
    Last_update: Date = new Date();
   
    constructor(_id: string, Level: string, courseName: string,courseDescription: string, Course_Pic: string) {
    
      this._id = _id;
      this.Level = Level;
      this.courseName = courseName;
      this.courseDescription = courseDescription;
      this.Course_Pic = Course_Pic;
  
  }

  isValidCoursePicture(pictureUrl: string): boolean {
    // Regular expression to check if the URL points to an image file
    const imageFileExtensions = /\.(jpg|jpeg|png|gif|bmp)$/i;

    // Use the regex.test() method to check if the URL matches the image file extension pattern
    return imageFileExtensions.test(pictureUrl);
  }

  toJSON(): Record<string, any> {
    return {

      _id: this._id,
      courseName: this.courseName,
      courseDescription: this.courseDescription,
      Level:this.Level,
      Course_Pic: this.Course_Pic,
      
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
