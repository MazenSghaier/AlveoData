# Educational Platform README

## Overview

This MERN stack project is an educational platform designed to provide a seamless user experience for both visitors and students. The project utilizes MongoDB, Node, Express, React, TypeScript, Javascript, Tailwind CSS, Redux, and Redux Persist to create a feature-rich platform.


## Usage

Welcome to our educational platform! This section provides a guide on how users can navigate and interact with the platform's main functionalities.

### Visitors Section

1. **Exploring Content and Services**
   
   - As a visitor, you can access the visitors' section by simply landing on the platform's homepage.
   - Explore the platform's content and available services.
   - Discover the subjects and courses we offer.

2. **Watching Free Videos**

   - Visitors have the opportunity to watch a single free video for each subject.
   - Click on a subject of interest, and you'll find a free video available for viewing.
   - Enjoy high-quality educational content at no cost.

3. **Chatbot Assistance**

   - If you have any questions or need assistance, our chatbot is here to help.
   - Simply click on the chatbot icon and type your query. The chatbot will provide responses and guidance.

### Student Interface

#### Home Page

1. **Last Uploaded Videos**
   
   - Upon logging in as a student, the home page will display the latest uploaded videos.
   - Stay updated with the newest educational content.

2. **Free Videos**

   - Access the free video section to explore additional educational material.
   - Watch and learn from a variety of free resources.

3. **Course Progress**

   - The home page also displays your progress in courses you've enrolled in.
   - Check your course completion status and continue where you left off.

#### Profile Page

1. **Viewing and Updating Profile Information**

   - Navigate to the profile page to view your personal information.
   - Update your profile details, such as name, email, and profile picture.
   - Ensure your profile is up-to-date for a personalized experience.

#### Courses Page

1. **Browsing Courses**

   - Explore the courses page to discover the available subjects.
   - Courses are listed along with progress indicators.

2. **Selecting a Course**

   - Click on a course to access its dedicated page.

#### Course Page

1. **Playlist and Video Selection**

   - On the course page, you'll find a playlist of the course content on the right.
   - Browse the available videos and select the one you want to watch.

2. **Video Progress Tracking**

   - The platform automatically tracks your video progress.
   - If you pause a video, your progress will be saved in localStorage.

3. **Marking Videos as Completed**

   - To indicate that you've completed a video, simply click the "Finish" button.
   - A finish icon will appear on the playlist for completed videos.

4. **Automatic Video Completion**

   - Videos will also be marked as completed when you reach the end of the video.
   - The completion status is saved in localStorage for your convenience.

#### Comment Section

1. **Engage in Discussions**

   - Each course has a dedicated comment section for discussions and questions.
   - Post comments to share your thoughts, ask questions, or provide feedback.

2. **Replying to Comments**

   - Engage with other users by replying to their comments.
   - Encourage discussions and create a vibrant learning community.

## Technologies Used

- **Frontend:** TypeScript, Tailwind CSS
- **State Management:** Redux
- **Data Persistence:** Redux Persist
- **Backend:** Node.js, Express.js
- **Data Base** MongoDB 

## Installation

Clone this repository to your local machine using this command :
```
# Clone this repository to your local machine
git clone https://github.com/MazenSghaier/EducationalPlatform.git

# Import the project into your IDE.

# Open the index.js file located in education_platform-back/ and update the database credentials with your own.
# Modify the MongoDB connection URL and CORS configuration as needed:

  datasource:
    const ConnectionURL = "mongodb+srv://{POSTGRES_HOST:localhost}:{POSTGRES_Password:1234}@firstcluster.v33gplb.mongodb.net/?";
    // Configure CORS middleware
    const corsOptions = {
      origin: 'http://localhost:3000', // Replace with your React app's URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Allow cookies, if your API uses cookies for authentication
    };

# To install packages
npm install

# Run the backend via your IDE, npm start.

# Run the frontend via your IDE, or using the following command
npm start
```
## Contributing

1. Fork this repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them with descriptive commit messages.
5. Push your changes to your GitHub account.
6. Create a pull request from your branch to the original repository's main branch.
7. Wait for the maintainers to review and merge your changes.

When making contributions, please keep the following in mind:

1. Follow the code style and formatting guidelines used in the project.
2. Write clear and concise commit messages that explain the changes you made.
3. Make sure your changes do not break existing functionality.
4. Write tests for new code and ensure that all existing tests pass.

## License

You are allowed to use, copy, modify, and distribute the code freely, just don't create a bomb or something like that xD

---

Thank you for checking out our educational platform! We hope it provides an enriching learning experience for all users.
