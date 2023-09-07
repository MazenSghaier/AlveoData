import {Course} from './Course';


export class CourseGroup {

    _id: string;
    courseGroupName: string;
    courseDescription:string;
    Courses: Course[] = [];
    Last_update: Date = new Date(); 
   
    constructor(_id: string, Level: string, courseGroupName: string,courseDescription: string) {
    
      this._id = _id;
      this.courseGroupName = courseGroupName;
      this.courseDescription = courseDescription;
  
  }

  

  toJSON(): Record<string, any> {
    return {

      _id: this._id,
      courseGroupName: this.courseGroupName,
      courseDescription: this.courseDescription,
      Courses :this.Courses ,
      Last_update: this.Last_update,
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
